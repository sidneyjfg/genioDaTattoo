import React from 'react';
import './css/ShareButtons.css';

const SharedButtons = () => (
    <div id="botoesCompartilhar">
        <button id="buttonShareWhatsApp">
            <i className="fab fa-whatsapp"></i> Share on WhatsApp
        </button>
        <button id="buttonShareInstagram">
            <i className="fab fa-instagram"></i> Share on Instagram
        </button>
    </div>
);

export default SharedButtons;
