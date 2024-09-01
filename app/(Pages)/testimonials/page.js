'use client'
import React, { useState } from 'react';
import { Box, Avatar, IconButton, Paper } from '@mui/material';
import { styled } from '@mui/system';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next"
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import AdaptableMenu from "@/app/components/AdaptableMenu";


const TestimonialWrapper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    borderRadius: theme.spacing(2),
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    background: 'transparent',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 6px 25px rgba(0, 0, 0, 0.15)',
    },
}));


const QuoteIcon = styled(FaQuoteLeft)(({ theme }) => ({
    position: 'absolute',
    top: theme.spacing(2),
    left: theme.spacing(2),
    fontSize: '2rem',
    // color: theme.palette.primary.dark,
    opacity: 0.2,
}));

const NavButton = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: theme.palette.background.paper,
    '&:hover': {
        backgroundColor: theme.palette.primary.light,
    },
}));


const testimonials = [
    {
        id: 1,
        text: "Je suis extrêmement satisfait des services du Laboratoire Monétaire. Leur expertise et leur professionnalisme ont été cruciaux pour garantir la qualité de nos billets ayant dépensé plus de 5 ans derrière des incapables. Ils ont été un partenaire essentiel dans notre réussite. Que le bonheur vous accompagne pour toujours.",
        name: "Ahmed Ben Salah",
        role: "Maroc",
        avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
        id: 2,
        text: "Le Laboratoire Monétaire a dépassé toutes mes attentes. Leur équipe dévouée a travaillé sans relâche pour répondre à nos besoins spécifiques. Leurs résultats ont été impeccables, et je recommande vivement leurs services à toute entreprise.",
        name: "Leila Mansouri",
        role: "Tunisie",
        avatar: "https://i.pravatar.cc/150?img=2"
    },
    {
        id: 3,
        text: "Le professionnalisme du Laboratoire Monétaire est incomparable. Leur approche scientifique et leur engagement envers l'excellence ont été remarquables. Nous sommes reconnaissants pour leur contribution à notre succès. Nous souhaitons une collaboration fraternelle si Dieu le veut.",
        name: "Karim Amiri",
        role: "Algérie",
        avatar: "https://i.pravatar.cc/150?img=3"
    },
    {
        id: 4,
        text: "Je suis pleinement satisfaite des services du Laboratoire Monétaire. Leur expertise technique et leur réactivité ont été impressionnantes. Leurs recommandations ont été précieuses pour notre entreprise, soyez bénis.",
        name: "Fatma Abdel Nasser",
        role: "Égypte",
        avatar: "https://i.pravatar.cc/150?img=3"
    },

];


function page() {
    const { t } = useTranslation();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const currentTestimonial = testimonials[currentIndex];
    return (
        <main className="flex flex-col items-center text-center">
            <Container sx={{ py: 8 }}>
                <Typography variant="h1" component="h1" gutterBottom> {t("testimonials")}</Typography>               
                <TestimonialWrapper className='bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg'>
                    <QuoteIcon />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            position: 'relative',
                            minHeight: '300px',
                        }}
                    >
                        <Avatar
                            src={currentTestimonial.avatar}
                            alt={currentTestimonial.name}
                            sx={{
                                width: 80,
                                height: 80,
                                marginBottom: 2,
                                border: '3px solid',
                                borderColor: 'primary.main',
                            }}
                        />
                        <Typography
                            variant="body1"
                            sx={{
                                fontStyle: 'italic',
                                marginBottom: 2,
                                maxWidth: '80%',
                                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                            }}
                        >
                            {currentTestimonial.text}
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                            {currentTestimonial.name}
                        </Typography>
                        <Typography variant="subtitle2" color="text.secondary">
                            {currentTestimonial.role}
                        </Typography>
                    </Box>
                    <NavButton
                        onClick={handlePrev}
                        aria-label="Previous testimonial"
                        sx={{ left: 8 }}
                    >
                        <FaChevronLeft />
                    </NavButton>
                    <NavButton
                        onClick={handleNext}
                        aria-label="Next testimonial"
                        sx={{ right: 8 }}
                    >
                        <FaChevronRight />
                    </NavButton>
                </TestimonialWrapper>
                <AdaptableMenu />
            </Container>
        </main>
    )
}

export default page
