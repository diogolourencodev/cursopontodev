import Head from 'next/head';
import Script from 'next/script';

function Home() {
  function handleClick() {
    alert('Obrigado por ver isso. Espero que seu dia/tarde/noite seja ou esteja sendo maravilhosa <3');
  }

  return (
    <>
      <Head>
        <title>Document</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <h1 onClick={handleClick}>Clique aqui</h1>

      <div className="video-container">
        <div className="video-box">
          <iframe
            src="https://www.youtube.com/embed/jJPMnTXl63E"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <style jsx global>{`
        html, body, #__next {
          height: 80%;
          width: 77%;
          margin: 0;
          padding: 0;
        }
        body {
          background: url('/assets/cursopontodev.png') no-repeat center center fixed;
          background-size: cover;
        }
        h1 {
          color: white;
          cursor: pointer;
        }
        .video-container {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .video-box iframe {
          width: 400px;
          height: 225px;
          border-radius: 8px;
        }
        @media (max-width: 500px) {
          .video-box iframe {
            width: 90vw;
            height: 50vw;
          }
        }
      `}</style>

      <Script id="meu-script" strategy="afterInteractive">
        {`console.log('Obrigado por ver isso. Espero que seu dia/tarde/noite seja ou esteja sendo maravilhosa <3');`}
      </Script>
    </>
  );
}

export default Home;
