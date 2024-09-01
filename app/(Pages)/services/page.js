'use client'

import { Container, Grid, Typography, Box } from "@mui/material";
import { useTranslation } from "react-i18next"
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import AdaptableMenu from "@/app/components/AdaptableMenu";
import Image from "next/image";
import { motion } from "framer-motion";

const pages = ['home', 'whoWeAre', 'services', 'testimonials', 'contact'];

function page() {
    const { t } = useTranslation();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const services = [
        {
            title: t("service1"),
            description: t("service1Description"),
            img: '/assets/analysis.svg',
            delay: 0,
        },
        {
            title: t("service2"),
            description: t("service2Description"),
            img: '/assets/development.svg',
            delay: 200,
        },
        {
            title: t("service3"),
            description: t("service3Description"),
            img: '/assets/consulting.svg',
            delay: 400,
        },
        {
            title: t("service4"),
            description: t("service4Description"),
            img: '/assets/learn.svg',
            delay: 400,
        },
        {
            title: t("service5"),
            description: t("service5Description"),
            img: '/assets/quality.svg',
            delay: 400,
        },
    ]

    return (
        <main className="flex flex-col items-center text-start ">
            <Container sx={{ py: 8 }}>
                <Typography variant="h1" component="h1" gutterBottom> {t("services")}</Typography>
                <Grid container className=" bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-5">
                    {services.map((service, index) => (
                        <Grid item xs={6} md={4} lg={12} key={index}>
                            <Box component={motion.div} whileHover={{ scale: 0.95 }} p={1} display={'flex'} flexDirection={'column'} alignItems={'end'} justifyContent={'end'}>
                                <Image
                                    src={service.img}
                                    alt={service.img}
                                    width={150}
                                    height={150}                             
                                    // style={{ width: '100%', height: '100px', borderRadius: '12px', objectFit: 'contain' }} // optional
                                    priority
                                />
                                <Typography variant="h2" component="h2" fontWeight={'400'} gutterBottom>{service.title}</Typography>
                                <Typography variant="h6" component="p" textAlign={'end'} lineHeight={2}>
                                    {service.description}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
                <AdaptableMenu />
            </Container>
        </main>
    )
}

export default page