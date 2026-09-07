"use client";

import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialCarousel() {
    const cardsComment = [
        {
            id: 1,
            name: "Cheiva Cake'S",
            user: "Empresa de Doces",
            comment: "Se eu tivesse que definir o Spendwise em uma palavra, seria facilidade. Ele nos ajuda a organizar as movimentações financeiras do dia a dia e entender melhor a realidade da nossa pequena empresa.",
        },
        {
            id: 2,
            name: "LR FutStore",
            user: "Loja de Roupas",
            comment: "Hoje fazemos grande parte do nosso controle financeiro pelo Spendwise. Os dashboards e relatórios são simples de entender e ajudam muito na visualização das entradas, despesas e resultados do negócio.",
        },
        {
            id: 3,
            name: "Yasmin Toscano",
            user: "Finanças Pessoais",
            comment: "Uso o Spendwise para organizar minhas contas pessoais e acompanhar tudo o que entra e sai. Ter essa visão das minhas finanças me ajudou a tomar decisões melhores e manter muito mais controle no dia a dia.",
        },
        {
            id: 4,
            name: "Wendell Bonucci",
            user: "Empreendedor",
            comment: "Utilizo o Spendwise tanto para minhas finanças pessoais quanto para acompanhar as movimentações dos meus negócios. O que mais gosto é a simplicidade das funcionalidades e a rapidez para entender os números.",
        },
        {
            id: 5,
            name: "Davi Saraiva",
            user: "Empreendedor",
            comment: "O Spendwise me ajuda a acompanhar meus gastos e visualizar os resultados mensais e anuais. Saber exatamente onde estou gastando e quanto consigo economizar trouxe muito mais clareza para minha organização financeira.",
        },
    ];

    const ratingStars = [
        { id: "star-1" },
        { id: "star-2" },
        { id: "star-3" },
        { id: "star-4" },
        { id: "star-5" },
    ];

    return (
        <section id="depoimentos" className="relative overflow-hidden bg-background py-16 sm:py-20 md:py-24 lg:py-28">
            <div className="pointer-events-none absolute -left-24 top-20 size-90 rounded-full bg-primary/10 blur-[140px]" />
            <div className="pointer-events-none absolute -right-24 bottom-0 size-85 rounded-full bg-accent/10 blur-[140px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12">
                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease: "easeOut" }} className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex items-center rounded-full border border-border/30 bg-primary/10 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-primarydark sm:text-xs">
                        Quem usa, recomenda
                    </span>

                    <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.04em] text-background-soft sm:text-4xl md:text-5xl">
                        O que nossos usuários dizem sobre o
                        <span className="text-primary"> Spendwise</span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base md:text-lg">
                        Pessoas e pequenos negócios usam o Spendwise para organizar movimentações, acompanhar resultados e ter uma visão mais clara das próprias finanças.
                    </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }} className="mt-10 sm:mt-12">
                    <Swiper modules={[Autoplay, Pagination]} spaceBetween={20} slidesPerView={1} loop={true} speed={800} autoplay={{ delay: 4200, disableOnInteraction: false, pauseOnMouseEnter: true }} pagination={{ clickable: true }} breakpoints={{ 640: { slidesPerView: 1.15, spaceBetween: 18 }, 768: { slidesPerView: 2, spaceBetween: 20 }, 1024: { slidesPerView: 3, spaceBetween: 24 } }} className="testimonial-swiper pb-12!">
                        {cardsComment.map((card) => (
                            <SwiperSlide key={card.id} className="h-auto">
                                <article className="group flex h-full min-h-75 flex-col justify-between rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-border/40 hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)] sm:p-7">
                                    <div>
                                        <div className="mb-5 flex items-center justify-between">
                                            <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                                                <Quote size={18} strokeWidth={2} />
                                            </span>

                                            <div className="flex items-center gap-1 text-primary">
                                                {ratingStars.map((star) => (
                                                    <Star key={star.id} size={14} fill="currentColor" strokeWidth={1.8} />
                                                ))}
                                            </div>
                                        </div>

                                        <p className="text-sm leading-7 text-muted sm:text-[15px]">
                                            “{card.comment}”
                                        </p>
                                    </div>

                                    <div className="mt-7 border-t border-black/5 pt-5">
                                        <div className="flex items-center gap-3">
                                            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                                                {card.name.charAt(0)}
                                            </div>

                                            <div>
                                                <h3 className="text-sm font-semibold text-background-soft sm:text-[15px]">
                                                    {card.name}
                                                </h3>

                                                <span className="mt-0.5 block text-xs text-muted">
                                                    {card.user}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>
        </section>
    );
}