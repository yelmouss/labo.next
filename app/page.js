'use client';
import { Container, Typography } from "@mui/material";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Box, Grid, Tooltip } from "@mui/material";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
import { useTheme } from "@emotion/react";
import AdaptableMenu from "./components/AdaptableMenu";

export default function Home() {
  const { t } = useTranslation();
  return (
    <main className="flex flex-col items-center text-center">
      <Container sx={{ py: 8 }}>
        <Typography variant="h1" gutterBottom>
          {t('WelcometoLaboMonétaire')}
        </Typography>
        {/* <Typography variant="body1" component="p" lineHeight={2}>
          {t("Weoffer")}
        </Typography> */}
        <Box py={8}>
          <Grid container spacing={6}>
            {[
              {
                img: '/assets/home2.png',
                title: 'SpecializationSSDSolutions',
                desc: 'Wearealaboratoryspecializing',
                delay: 0,
              },
              {
                img: '/assets/home2.jpg',
                title: 'AdvancedChemical',
                desc: 'Ourlaboratory',
                delay: 200,
              },
              {
                img: '/assets/home1.jpeg',
                title: 'High-Quality',
                desc: 'Weoffer',
                delay: 400,
              },
            ].map((service, index) => (
              <Grid item xs={12} md={6} lg={4} key={index} component={motion.div} whileHover={{ scale: 1.06 }}>
                <Fade direction="up" triggerOnce delay={service.delay}>
                  <Box
                    textAlign="center"
                    className="p-3 rounded-lg shadow-lg bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg"
                    sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                  >
                    <Box component={motion.div} whileHover={{ scale: 1.09 }}>
                      <Image
                        src={service.img}
                        alt={service.title}
                        width={0}
                        height={0}
                        sizes="70vw"
                        style={{ width: '100%', height: '200px', borderRadius: 12, objectFit: 'cover' }}
                        priority
                      />
                    </Box>

                    <Tooltip title={t(service.title)}>
                      <Typography variant="h6" className="font-semibold line-clamp-3 py-3">
                        {t(service.title)}
                      </Typography>
                    </Tooltip>
                    <Tooltip title={t(service.desc)}>
                      <Typography variant="body" className="mt-2 lg:line-clamp-6" sx={{ flexGrow: 1 }}>
                        {t(service.desc)}
                      </Typography>
                    </Tooltip>
                  </Box>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Box>
        <AdaptableMenu />
      </Container>   
    </main>
  );
}
