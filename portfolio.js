window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-CYGNHKSND8', {
    'anonymize_ip': false
});
(function(m, e, t, r, i, k, a) {
    m[i] = m[i] || function() {
        (m[i].a = m[i].a || []).push(arguments)
    }
    ;
    m[i].l = 1 * new Date();
    k = e.createElement(t),
    a = e.getElementsByTagName(t)[0],
    k.async = 1,
    k.src = r,
    a.parentNode.insertBefore(k, a)
}
)(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(49691662, "init", {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true
});
googleTag("#form-btn-main-1", "form-btn-main-1");
googleTag("#form-btn-main-2", "form-btn-main-2");
googleTag("#form-btn-main-3", "form-btn-main-3");
googleTag("#form-btn-ux-1", "form-btn-ux-1");
googleTag("#form-btn-ux-2", "form-btn-ux-2");
googleTag("#form-btn-ux-3", "form-btn-ux-3");
googleTag("#form-btn-ux-4", "form-btn-ux-4");
googleTag("#form-btn-ux-5", "form-btn-ux-5");
googleTag("#form-btn-ux-6", "form-btn-ux-6");
googleTag("#form-btn-ux-7", "form-btn-ux-7");
googleTag("#form-btn-wf-1", "form-btn-wf-1");
googleTag("#form-btn-wf-2", "form-btn-wf-2");
googleTag("#form-btn-wf-3", "form-btn-wf-3");
googleTag("#form-btn-wf-4", "form-btn-wf-4");
googleTag("#form-btn-wf-5", "form-btn-wf-5");
googleTag("#form-btn-wf-6", "form-btn-wf-6");
googleTag("#form-btn-wf-7", "form-btn-wf-7");
googleTag("#form-btn-pp-1", "form-btn-pp-1");
googleTag("#form-btn-pp-2", "form-btn-pp-2");
googleTag("#form-btn-pp-3", "form-btn-pp-3");
googleTag("#submit_form_popup", "submit_form_click");
googleTag("#email_text_popup", "copy_email_click");
googleTag("#copy_email_popup", "email_select");

function googleTag(id, event) {
    const idArray = document.querySelectorAll(id)
    if (idArray.length > 0) {
        idArray[0].addEventListener("click", ()=>{
            gtag("event", event);
        }
        );
    }
}
const emailCopyButtons = document.querySelectorAll(".form-popup__email-copy");
emailCopyButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const relatedCopyText = button.closest(".form-popup").querySelector(".copy-text");
        if (relatedCopyText) {
            navigator.clipboard.writeText(relatedCopyText.innerText).then(function() {
                console.log('Text copied to clipboard');
            }).catch(function(error) {
                console.error('Error:', error);
            });
        }
    });
});