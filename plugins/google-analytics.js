export default defineNuxtPlugin((nuxtApp) => {
    if (process.client) {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-N9VTPHGJDE';
      document.head.appendChild(script);
  
      // 配置 Google Analytics
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-N9VTPHGJDE');
    }
  });
  