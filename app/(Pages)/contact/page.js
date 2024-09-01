'use client'

import {  Container, Typography, } from "@mui/material";
import { useTranslation } from "react-i18next"
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import AdaptableMenu from "@/app/components/AdaptableMenu";
const pages = ['home', 'whoWeAre', 'services', 'testimonials', 'contact'];

function page() {
    const { t } = useTranslation();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <main className="flex flex-col items-center text-center">
            <Container sx={{ py: 8 }}>
                <Typography variant="h1" component="h1" gutterBottom> {t("contact")}</Typography>
                <Typography variant="body1" component="p">
                    {t("WhoWeAreParagraph")}
                </Typography>       
                <AdaptableMenu />
            </Container>
        </main>
    )
}

export default page
