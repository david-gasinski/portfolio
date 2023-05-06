import { motion } from 'framer-motion';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <motion.div>{children}</motion.div>
            </body>
        </html>
    );
}
