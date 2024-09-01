"use client";
import { useTheme } from "@emotion/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function getCurrentYear() {
    return new Date().getFullYear();
}

function Footer() {
    const currentYear = getCurrentYear();
    const theme = useTheme();

    return (
        <footer
            className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg text-center text-lg-start py-8 mt-auto w-full"
        >
            <div className="flex justify-center mb-6 space-x-6">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <Link href="https://wa.me/+905376395644" target="_blank">
                        <Image
                            src="/assets/whatsapp.svg"
                            alt="whatsapp"
                            width={28}
                            height={28}
                            className="hover:opacity-80 transition-opacity duration-280"
                        />
                    </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <Link href="tel:+905376395644" target="_blank">
                        <Image
                            src="/assets/phone.svg"
                            alt="phone"
                            width={28}
                            height={28}
                            className="hover:opacity-80 transition-opacity duration-280"
                        />
                    </Link>
                </motion.div>

       


                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <Link href="https://web.facebook.com/profile.php?id=61558489109024" target="_blank">
                        <Image
                            src="/assets/facebook.svg"
                            alt="phone"
                            width={28}
                            height={28}
                            className="hover:opacity-80 transition-opacity duration-280"
                        />
                    </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <Link href="https://www.linkedin.com/in/laboratoire-monetaire-496964284/" target="_blank">
                        <Image
                            src="/assets/linkedin.svg"
                            alt="phone"
                            width={28}
                            height={28}
                            className="hover:opacity-80 transition-opacity duration-280"
                        />
                    </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <Link href="https://www.instagram.com/labomonetaires/" target="_blank">
                        <Image
                            src="/assets/instagram.svg"
                            alt="instagram"
                            width={28}
                            height={28}
                            className="hover:opacity-80 transition-opacity duration-280"
                        />
                    </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <Link href="https://www.youtube.com/@labomonetaire-el4pl/videos" target="_blank">
                        <Image
                            src="/assets/youtube.svg"
                            alt="instagram"
                            width={28}
                            height={28}
                            className="hover:opacity-80 transition-opacity duration-280"
                        />
                    </Link>
                </motion.div>
            </div>       

            <div
                className="mt-6 border-t border-gray-280 pt-4"
                style={{ borderColor: theme.one.main }}
            >
                <p className="text-sm text-gray-500"> {currentYear} | Labomonetaire - All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer