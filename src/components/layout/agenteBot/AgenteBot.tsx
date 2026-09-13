"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { ArrowDownLeft, ArrowUpRight, Bot, MessageCircle, RefreshCcw, ShieldCheck, X, } from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

type ActionType = "navigate" | "whatsapp" | "restart";

type ChatOption = {
    id: string;
    text: string;
    nextNodeId?: string;
    action?: ActionType;
    whatsappMessage?: string;
};

type ChatNode = {
    id: string;
    title?: string;
    text: string;
    options: ChatOption[];
};

type Message = {
    id: string;
    sender: "bot" | "user";
    text: string;
};

const WHATSAPP_NUMBER = "5585997276499";

const createMessage = (sender: Message["sender"], text: string): Message => ({
    id: crypto.randomUUID(),
    sender,
    text,
});

const chatScript: Record<string, ChatNode> = {
    start: {
        id: "start",
        title: "Como posso ajudar?",
        text: "Olá! 👋 Sou o assistente virtual do Spendwise. Posso te ajudar a conhecer melhor o aplicativo, entender os recursos ou encontrar a melhor forma de começar.",
        options: [
            { id: "start-1", text: "Conhecer o Spendwise", nextNodeId: "conhecer", action: "navigate" },
            { id: "start-2", text: "Explorar recursos", nextNodeId: "recursos", action: "navigate" },
            { id: "start-3", text: "Organizar minhas finanças", nextNodeId: "perfil", action: "navigate" },
            { id: "start-4", text: "Preciso de suporte", nextNodeId: "suporte", action: "navigate" },
        ],
    },

    conhecer: {
        id: "conhecer",
        title: "Sobre o Spendwise",
        text: "O Spendwise foi criado para simplificar o controle financeiro. Você acompanha receitas, despesas, saldo e resultados por períodos semanais, mensais e anuais, tudo através de uma experiência visual simples e intuitiva.",
        options: [
            { id: "conhecer-1", text: "Ver principais recursos", nextNodeId: "recursos", action: "navigate" },
            { id: "conhecer-2", text: "Quero começar agora", nextNodeId: "comecar", action: "navigate" },
            { id: "conhecer-3", text: "Voltar ao início", action: "restart" },
        ],
    },

    recursos: {
        id: "recursos",
        title: "Recursos",
        text: "O Spendwise concentra os recursos essenciais para você entender melhor o seu dinheiro. Qual deles você gostaria de conhecer?",
        options: [
            { id: "recursos-1", text: "Receitas e despesas", nextNodeId: "movimentacoes", action: "navigate" },
            { id: "recursos-2", text: "Dashboards e relatórios", nextNodeId: "dashboard", action: "navigate" },
            { id: "recursos-3", text: "Acompanhamento de saldo", nextNodeId: "saldo", action: "navigate" },
            { id: "recursos-4", text: "Voltar ao início", action: "restart" },
        ],
    },

    movimentacoes: {
        id: "movimentacoes",
        title: "Movimentações",
        text: "Registre entradas e saídas, organize movimentações por categorias e acompanhe como suas finanças evoluem durante a semana, o mês e o ano.",
        options: [
            { id: "movimentacoes-1", text: "Conhecer dashboards", nextNodeId: "dashboard", action: "navigate" },
            { id: "movimentacoes-2", text: "Quero experimentar", nextNodeId: "comecar", action: "navigate" },
            { id: "movimentacoes-3", text: "Voltar aos recursos", nextNodeId: "recursos", action: "navigate" },
        ],
    },

    dashboard: {
        id: "dashboard",
        title: "Dashboards",
        text: "Os dashboards transformam suas movimentações em informações fáceis de entender. Você visualiza faturamento, despesas, saldo e evolução financeira sem precisar analisar planilhas complexas.",
        options: [
            { id: "dashboard-1", text: "Como funciona o saldo?", nextNodeId: "saldo", action: "navigate" },
            { id: "dashboard-2", text: "Quero começar agora", nextNodeId: "comecar", action: "navigate" },
            { id: "dashboard-3", text: "Voltar aos recursos", nextNodeId: "recursos", action: "navigate" },
        ],
    },

    saldo: {
        id: "saldo",
        title: "Visão financeira",
        text: "O Spendwise reúne suas receitas e despesas para apresentar uma visão clara do resultado financeiro. Assim você consegue entender quanto entrou, quanto saiu e qual foi seu saldo no período.",
        options: [
            { id: "saldo-1", text: "Quero organizar minhas finanças", nextNodeId: "perfil", action: "navigate" },
            { id: "saldo-2", text: "Começar agora", nextNodeId: "comecar", action: "navigate" },
            { id: "saldo-3", text: "Voltar ao início", action: "restart" },
        ],
    },

    perfil: {
        id: "perfil",
        title: "Vamos encontrar seu perfil",
        text: "Perfeito. Para eu te orientar melhor, como você pretende utilizar o Spendwise?",
        options: [
            { id: "perfil-1", text: "Finanças pessoais", nextNodeId: "pessoal", action: "navigate" },
            { id: "perfil-2", text: "Meu pequeno negócio", nextNodeId: "negocio", action: "navigate" },
            { id: "perfil-3", text: "Como empreendedor", nextNodeId: "empreendedor", action: "navigate" },
            { id: "perfil-4", text: "Voltar ao início", action: "restart" },
        ],
    },

    pessoal: {
        id: "pessoal",
        title: "Finanças pessoais",
        text: "Para uso pessoal, o Spendwise ajuda você a enxergar para onde seu dinheiro está indo, controlar gastos, acompanhar receitas e entender quanto consegue economizar ao longo do tempo.",
        options: [
            { id: "pessoal-1", text: "Quero experimentar o Spendwise", nextNodeId: "comecar", action: "navigate" },
            {
                id: "pessoal-2",
                text: "Falar com o Spendwise",
                action: "whatsapp",
                whatsappMessage: "Olá! Conheci o Spendwise pelo site e gostaria de saber mais sobre o uso do aplicativo para organização das minhas finanças pessoais.",
            },
            { id: "pessoal-3", text: "Voltar", nextNodeId: "perfil", action: "navigate" },
        ],
    },

    negocio: {
        id: "negocio",
        title: "Pequenos negócios",
        text: "Para pequenos negócios, o Spendwise facilita o acompanhamento de faturamento, despesas e saldo, oferecendo uma visão rápida da saúde financeira da operação.",
        options: [
            { id: "negocio-1", text: "Quero experimentar o Spendwise", nextNodeId: "comecar", action: "navigate" },
            {
                id: "negocio-2",
                text: "Falar sobre meu negócio",
                action: "whatsapp",
                whatsappMessage: "Olá! Tenho um pequeno negócio e conheci o Spendwise pelo site. Gostaria de entender melhor como posso utilizar o aplicativo no meu controle financeiro.",
            },
            { id: "negocio-3", text: "Voltar", nextNodeId: "perfil", action: "navigate" },
        ],
    },

    empreendedor: {
        id: "empreendedor",
        title: "Para empreendedores",
        text: "Como empreendedor, você pode utilizar o Spendwise para separar melhor suas movimentações, acompanhar resultados e visualizar dados que facilitam decisões financeiras no dia a dia.",
        options: [
            { id: "empreendedor-1", text: "Começar agora", nextNodeId: "comecar", action: "navigate" },
            {
                id: "empreendedor-2",
                text: "Conversar pelo WhatsApp",
                action: "whatsapp",
                whatsappMessage: "Olá! Sou empreendedor e conheci o Spendwise pelo site. Gostaria de entender melhor como a plataforma pode me ajudar na organização financeira.",
            },
            { id: "empreendedor-3", text: "Voltar", nextNodeId: "perfil", action: "navigate" },
        ],
    },

    comecar: {
        id: "comecar",
        title: "Pronto para começar?",
        text: "Ótimo! Você está a um passo de ter uma visão muito mais clara das suas finanças. Você pode iniciar pelo aplicativo ou falar conosco caso ainda tenha alguma dúvida.",
        options: [
            { id: "comecar-1", text: "Acessar o Spendwise", nextNodeId: "app", action: "navigate" },
            {
                id: "comecar-2",
                text: "Tirar uma dúvida no WhatsApp",
                action: "whatsapp",
                whatsappMessage: "Olá! Estou conhecendo o Spendwise e gostaria de tirar algumas dúvidas antes de começar a utilizar o aplicativo.",
            },
            { id: "comecar-3", text: "Voltar ao início", action: "restart" },
        ],
    },

    app: {
        id: "app",
        title: "Spendwise",
        text: "Perfeito! Use o botão abaixo para acessar a experiência do Spendwise e começar a organizar suas finanças.",
        options: [
            { id: "app-1", text: "Reiniciar conversa", action: "restart" },
        ],
    },

    suporte: {
        id: "suporte",
        title: "Suporte",
        text: "Se você encontrou algum problema ou precisa de ajuda com o Spendwise, podemos direcionar seu atendimento pelo WhatsApp.",
        options: [
            {
                id: "suporte-1",
                text: "Falar com o suporte",
                action: "whatsapp",
                whatsappMessage: "Olá! Preciso de suporte relacionado ao Spendwise. Poderiam me ajudar?",
            },
            { id: "suporte-2", text: "Consultar recursos", nextNodeId: "recursos", action: "navigate" },
            { id: "suporte-3", text: "Voltar ao início", action: "restart" },
        ],
    },

    whatsapp: {
        id: "whatsapp",
        title: "Atendimento",
        text: "Tudo certo! Abrimos o WhatsApp para você continuar o atendimento. Caso a nova janela não tenha aberto, você pode tentar novamente.",
        options: [
            { id: "whatsapp-1", text: "Voltar ao início", action: "restart" },
        ],
    },
};

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [currentNode, setCurrentNode] = useState<ChatNode>(chatScript.start);
    const [messages, setMessages] = useState<Message[]>(() => [
        createMessage("bot", chatScript.start.text),
    ]);

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const scrollToBottom = useCallback(() => {
        requestAnimationFrame(() => {
            messagesEndRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "end",
            });
        });
    }, []);

    const resetChat = useCallback(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        setIsTyping(false);
        setCurrentNode(chatScript.start);
        setMessages([createMessage("bot", chatScript.start.text)]);
    }, []);

    const openWhatsapp = useCallback((message: string) => {
        const encodedMessage = encodeURIComponent(message);

        window.open(
            `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`,
            "_blank",
            "noopener,noreferrer"
        );
    }, []);

    const handleOptionClick = useCallback(
        (option: ChatOption) => {
            if (isTyping) return;

            setMessages((previousMessages) => [
                ...previousMessages,
                createMessage("user", option.text),
            ]);

            if (option.action === "restart") {
                setIsTyping(true);

                timeoutRef.current = setTimeout(() => {
                    resetChat();
                }, 450);

                return;
            }

            setIsTyping(true);

            const responseDelay = Math.min(
                Math.max(option.text.length * 20, 550),
                950
            );

            timeoutRef.current = setTimeout(() => {
                if (option.action === "whatsapp") {
                    const nextNode = chatScript.whatsapp;

                    setCurrentNode(nextNode);
                    setMessages((previousMessages) => [
                        ...previousMessages,
                        createMessage("bot", nextNode.text),
                    ]);

                    setIsTyping(false);

                    if (option.whatsappMessage) {
                        openWhatsapp(option.whatsappMessage);
                    }

                    return;
                }

                const nextNode = option.nextNodeId
                    ? chatScript[option.nextNodeId]
                    : chatScript.start;

                setCurrentNode(nextNode);

                setMessages((previousMessages) => [
                    ...previousMessages,
                    createMessage("bot", nextNode.text),
                ]);

                setIsTyping(false);
            }, responseDelay);
        },
        [isTyping, openWhatsapp, resetChat]
    );

    /*     useEffect(() => {
            scrollToBottom();
        }, [messages, isTyping, scrollToBottom]); */

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };

        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return (
        <div className="fixed bottom-4 right-4 z-100 font-sans sm:bottom-6 sm:right-6">
            <AnimatePresence mode="wait">
                {!isOpen && (
                    <motion.button
                        key="chat-trigger"
                        type="button"
                        onClick={() => setIsOpen(true)}
                        aria-label="Abrir assistente do Spendwise"
                        initial={{ opacity: 0, scale: 0.8, y: 15 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative flex size-14 items-center justify-center rounded-2xl border border-primarylight/50 bg-primary text-background-soft shadow-[0_16px_40px_rgba(16,185,129,0.28)] transition-colors duration-300 hover:bg-primarylight sm:size-16"
                    >
                        <span className="absolute -right-1 -top-1 size-3 rounded-full border-2 border-white bg-accent" />

                        <MessageCircle size={23} strokeWidth={2.2} className="transition-transform duration-300 group-hover:rotate-[-5deg] sm:size-6" />
                    </motion.button>
                )}

                {isOpen && (
                    <motion.div
                        key="chat-window"
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.96 }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                        className="flex h-[min(680px,calc(100dvh-32px))] w-[calc(100vw-32px)] flex-col overflow-hidden rounded-[26px] border border-border/30 bg-white shadow-[0_25px_80px_rgba(0,0,0,0.18)] sm:h-155 sm:w-97.5"
                    >
                        <header className="relative overflow-hidden border-b border-black/5 bg-white px-4 py-4 sm:px-5">
                            <div className="pointer-events-none absolute -left-10 -top-16 size-32 rounded-full bg-primary/15 blur-3xl" />

                            <div className="relative flex items-center justify-between gap-4">
                                <div className="flex min-w-0 items-center gap-3">
                                    <div className="relative flex size-11 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                                        <Bot size={20} strokeWidth={2.2} />

                                        <span className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full border-2 border-white bg-accent" />
                                    </div>

                                    <div className="min-w-0">
                                        <div className="flex items-center gap-2">
                                            <h2 className="truncate text-sm font-semibold tracking-[-0.02em] text-background-soft">
                                                Spendwise Assistant
                                            </h2>

                                            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[8px] font-semibold uppercase tracking-[0.14em] text-primarydark">
                                                Beta
                                            </span>
                                        </div>

                                        <div className="mt-1 flex items-center gap-1.5">
                                            <span className="size-1.5 rounded-full bg-accent shadow-[0_0_7px_var(--color-glow)]" />

                                            <span className="text-[10px] text-muted">
                                                Assistente disponível
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    aria-label="Fechar assistente"
                                    className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-black/5 text-muted transition-all duration-300 hover:border-border/40 hover:bg-primary/10 hover:text-primary"
                                >
                                    <X size={17} />
                                </button>
                            </div>
                        </header>

                        <div className="flex-1 overflow-y-auto bg-background px-4 py-5 sm:px-5">
                            <div className="flex flex-col gap-4">
                                {messages.map((message) => (
                                    <motion.div
                                        key={message.id}
                                        initial={{ opacity: 0, y: 12, scale: 0.98 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        transition={{ duration: 0.3 }}
                                        className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                                    >
                                        <div className={`max-w-[88%] rounded-2xl px-4 py-3 text-xs leading-6 sm:text-[13px] ${message.sender === "user" ? "rounded-br-md bg-primary text-background-soft shadow-[0_8px_20px_rgba(16,185,129,0.18)]" : "rounded-bl-md border border-black/5 bg-white text-muted shadow-sm"}`}>
                                            {message.text}
                                        </div>
                                    </motion.div>
                                ))}

                                <AnimatePresence>
                                    {isTyping && (
                                        <motion.div
                                            key="typing"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            className="flex justify-start"
                                        >
                                            <div className="flex items-center gap-2 rounded-2xl rounded-bl-md border border-black/5 bg-white px-4 py-3 shadow-sm">
                                                <Bot size={14} className="text-primary" />

                                                <div className="flex items-center gap-1">
                                                    <motion.span animate={{ y: [0, -3, 0] }} transition={{ duration: 0.8, repeat: Infinity }} className="size-1.5 rounded-full bg-primary" />
                                                    <motion.span animate={{ y: [0, -3, 0] }} transition={{ duration: 0.8, delay: 0.15, repeat: Infinity }} className="size-1.5 rounded-full bg-primary" />
                                                    <motion.span animate={{ y: [0, -3, 0] }} transition={{ duration: 0.8, delay: 0.3, repeat: Infinity }} className="size-1.5 rounded-full bg-primary" />
                                                </div>

                                                <span className="ml-1 text-[10px] text-muted">
                                                    Pensando...
                                                </span>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <div ref={messagesEndRef} />
                            </div>
                        </div>

                        <div className="border-t border-black/5 bg-white p-4 sm:p-5">
                            {!isTyping && (
                                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-2">
                                    {currentNode.title && (
                                        <span className="mb-1 text-[9px] font-semibold uppercase tracking-[0.17em] text-muted">
                                            {currentNode.title}
                                        </span>
                                    )}

                                    {currentNode.id === "app" && (
                                        <a
                                            href="/test"
                                            className="group mb-1 flex w-full items-center justify-between rounded-xl bg-primary px-3.5 py-3 text-left text-xs font-semibold text-background-soft transition-all duration-300 hover:bg-primarylight"
                                        >
                                            <span>Acessar o Spendwise</span>

                                            <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                        </a>
                                    )}

                                    {currentNode.options.map((option) => {
                                        const isWhatsapp = option.action === "whatsapp";
                                        const isRestart = option.action === "restart";

                                        return (
                                            <button
                                                key={option.id}
                                                type="button"
                                                onClick={() => handleOptionClick(option)}
                                                className={`group flex w-full items-center justify-between gap-3 rounded-xl border px-3.5 py-3 text-left text-xs font-medium transition-all duration-300 ${isWhatsapp ? "border-primary/25 bg-primary/10 text-primarydark hover:border-primary/50 hover:bg-primary/15" : "border-black/5 bg-background text-background-soft hover:border-primary/30 hover:bg-primary/5"}`}
                                            >
                                                <span className="flex min-w-0 items-center gap-2.5">
                                                    {isWhatsapp ? (
                                                        <FaWhatsapp size={15} className="shrink-0 text-primary" />
                                                    ) : isRestart ? (
                                                        <RefreshCcw size={14} className="shrink-0 text-primary" />
                                                    ) : (
                                                        <ArrowDownLeft size={14} className="shrink-0 text-primary" />
                                                    )}

                                                    <span>{option.text}</span>
                                                </span>

                                                <ArrowUpRight size={13} className="shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                                            </button>
                                        );
                                    })}
                                </motion.div>
                            )}

                            <div className="mt-4 flex items-center justify-between border-t border-black/5 pt-3">
                                <div className="flex items-center gap-1.5">
                                    <ShieldCheck size={12} className="text-primary" />

                                    <span className="text-[9px] text-muted">
                                        Spendwise
                                    </span>
                                </div>

                                <span className="text-[9px] text-muted/70">
                                    Assistente virtual
                                </span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}