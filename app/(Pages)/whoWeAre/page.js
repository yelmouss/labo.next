'use client'
import { Box, Container, Typography, Tooltip } from "@mui/material";
import { useTranslation } from "react-i18next"
import { Grid } from "@mui/material";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
import Image from "next/image";

import AdaptableMenu from "@/app/components/AdaptableMenu";

function page() {
  const { t } = useTranslation();


  return (
    <main className="flex flex-col items-center text-center">
      <Container sx={{ py: 8 }}>
        <Typography variant="h1" component="h1" gutterBottom> {t("whoWeAre")}</Typography>
        <Typography variant="body1" component="p" lineHeight={2}>
          {t("WhoWeAreParagraph")}
        </Typography>
        <Box className="flex flex-col items-center gap-8" >
          <Box py={8}>
            <Grid container>
              {[
                {
                  img: '/assets/pres1.jpg',
                  delay: 0,
                },
                {
                  img: '/assets/pres2.jpg',
                  delay: 200,
                },
                {
                  img: '/assets/pres3.jpg',
                  delay: 400,
                },
              ].map((service, index) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                  <Fade direction="up" triggerOnce delay={service.delay}>
                    <Box component={motion.div} whileHover={{ scale: 0.95 }} p={1}>
                      <Image
                        src={service.img}
                        alt={service.img}
                        width={0}
                        height={0}
                        sizes="70vw"
                        style={{ width: '100%', height: '300px',  borderRadius: '12px', objectFit: 'cover', }} // optional
                        // className="mx-auto mb-4"
                        priority
                      />
                    </Box>
                  </Fade>
                </Grid>
              ))}

{[
                {
                  img: '/assets/slider1.jpeg',
                  img2: '/assets/slider2.jpg',
                  title: t('OffersYou'),
                  delay: 0,
                },
                {
                  img: '/assets/slider3.jpg',
                  img2: '/assets/slider4.jpg',
                  title: t('ChimicalSolution'),
                  desc: 'Wearealaboratoryspecializing',
                  delay: 0,
                },
                {
                  img: '/assets/slider5.jpg',
                  img2: '/assets/slider6.jpeg',
                  title: 'Thisisananti-laundering',
                  delay: 0,
                },
              ].map((service, index) => (
                <Grid item xs={12} md={6} lg={4} key={index} component={motion.div} whileHover={{ scale: 1.06 }} sx={{ height: '100%', p: 2 }}>
                  <Fade direction="up" triggerOnce delay={service.delay}>
                    <Box
                      textAlign="center"
                      className=""
                      sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                    >
                      <Grid container spacing={2} component={motion.div} whileHover={{ scale: 0.9 }}>
                        <Grid item xs={6}>
                          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Image
                              src={service.img}
                              alt={'image1'}
                              width={0}
                              height={0}
                              sizes="70vw"
                              style={{ width: '100%', height: 150, borderRadius: '0px 0px 12px 12px', objectFit: 'cover' }}
                              priority
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Image
                              src={service.img2}
                              alt={'image1'}
                              width={0}
                              height={0}
                              sizes="70vw"
                              style={{ width: '100%', height: 150, borderRadius: '0px 0px 12px 12px', objectFit: 'cover' }}
                              priority
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography variant="p" className="line-clamp-3">
                            <Tooltip title={t(service.title)}>
                              {t(service.title)}
                            </Tooltip>
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </Fade>
                </Grid>
              ))}
            </Grid>         
          </Box>


          <Typography variant="h2" component="h2" gutterBottom>
            {t("Our Location")}
          </Typography>
          <Container component={motion.div} whileHover={{ scale: 1.06 }} className="p-6 rounded-lg shadow-lg bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5249.932391295338!2d2.347035!3d48.858855!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis!5e0!3m2!1sen!2sfr!4v1725142147410!5m2!1sen!2sfr"
              width={'100%'}
              height={300}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
              style={{ borderRadius: 12, }}
            />

          </Container>

        </Box>

        <AdaptableMenu />
      </Container>

    </main>
  )
}

export default page
