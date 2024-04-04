import "./src/styles/global.css";
import React from "react";
import RootElement from "./src/components/RootElement";
import { Script } from "gatsby";

export const wrapPageElement = ({ element }) => (
  <RootElement>
    {element}
    <Script
      async
      id="brevo-bot"
      defer
      dangerouslySetInnerHTML={{
        __html: `(function(d, w, c) {
          w.BrevoConversationsID = '65279fd32231fa659138156a';
          w[c] = w[c] || function() {
              (w[c].q = w[c].q || []).push(arguments);
          };
          var s = d.createElement('script');
          s.async = true;
          s.src = 'https://conversations-widget.brevo.com/brevo-conversations.js';
          if (d.head) d.head.appendChild(s);
      })(document, window, 'BrevoConversations');`,
      }}
    />
  </RootElement>
);
