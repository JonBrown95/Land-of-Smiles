import { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    (function (w, d, s, o, f, js, fjs) {
      w['botsonic_widget'] = o;
      w[o] =
        w[o] ||
        function () {
          (w[o].q = w[o].q || []).push(arguments);
        };
      (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
      js.id = o;
      js.src = f;
      js.async = 1;
      fjs.parentNode.insertBefore(js, fjs);
    })(window, document, 'script', 'Botsonic', 'https://widget.writesonic.com/CDN/botsonic.min.js');
    Botsonic('init', {
      serviceBaseUrl: 'https://api.botsonic.ai',
      token: process.env.NEXT_PUBLIC_BOTSONIC_TOKEN,
    });
  }, []);

  return null;
};

export default Chatbot;
