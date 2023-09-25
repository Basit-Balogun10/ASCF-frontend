import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        href="https://fonts.googleapis.com"
                        rel="preconnect"
                    />
                    <link
                        href="https://fonts.gstatic.com"
                        rel="preconnect"
                        crossOrigin=""
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Poppins&family=Raleway&family=Secular+One&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body className="dark:bg-ourBlack dark:text-white">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument