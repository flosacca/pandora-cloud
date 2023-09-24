self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('pandora-cloud-cache').then(function (cache) {
            return cache.addAll([
                '/apple-touch-icon.png',
                '/favicon-16x16.png',
                '/favicon-32x32.png',
                '/ulp/react-components/1.66.5/css/main.cdn.min.css',
                '/sweetalert2/bulma.min.css',
                '/sweetalert2/sweetalert2.all.min-bc15590d.js',
                '/fonts/colfax/ColfaxAIBold.woff',
                '/fonts/colfax/ColfaxAIBold.woff2',
                '/fonts/colfax/ColfaxAIBoldItalic.woff',
                '/fonts/colfax/ColfaxAIBoldItalic.woff2',
                '/fonts/colfax/ColfaxAIRegular.woff',
                '/fonts/colfax/ColfaxAIRegular.woff2',
                '/fonts/colfax/ColfaxAIRegularItalic.woff',
                '/fonts/colfax/ColfaxAIRegularItalic.woff2',
                '/fonts/katex/KaTeX_AMS-Regular.woff2',
                '/fonts/katex/KaTeX_Caligraphic-Bold.woff2',
                '/fonts/katex/KaTeX_Caligraphic-Regular.woff2',
                '/fonts/katex/KaTeX_Fraktur-Bold.woff2',
                '/fonts/katex/KaTeX_Fraktur-Regular.woff2',
                '/fonts/katex/KaTeX_Main-Bold.woff2',
                '/fonts/katex/KaTeX_Main-BoldItalic.woff2',
                '/fonts/katex/KaTeX_Main-Italic.woff2',
                '/fonts/katex/KaTeX_Main-Regular.woff2',
                '/fonts/katex/KaTeX_Math-BoldItalic.woff2',
                '/fonts/katex/KaTeX_Math-Italic.woff2',
                '/fonts/katex/KaTeX_SansSerif-Bold.woff2',
                '/fonts/katex/KaTeX_SansSerif-Italic.woff2',
                '/fonts/katex/KaTeX_SansSerif-Regular.woff2',
                '/fonts/katex/KaTeX_Script-Regular.woff2',
                '/fonts/katex/KaTeX_Size1-Regular.woff2',
                '/fonts/katex/KaTeX_Size2-Regular.woff2',
                '/fonts/katex/KaTeX_Size3-Regular.woff2',
                '/fonts/katex/KaTeX_Size4-Regular.woff2',
                '/fonts/katex/KaTeX_Typewriter-Regular.woff2',
                '/fonts/signifier/signifier-bold-italic.woff2',
                '/fonts/signifier/signifier-bold.woff2',
                '/fonts/signifier/signifier-light-italic.woff2',
                '/fonts/signifier/signifier-light.woff2',
                '/fonts/soehne/soehne-buch-kursiv.woff2',
                '/fonts/soehne/soehne-buch.woff2',
                '/fonts/soehne/soehne-halbfett-kursiv.woff2',
                '/fonts/soehne/soehne-halbfett.woff2',
                '/fonts/soehne/soehne-kraftig-kursiv.woff2',
                '/fonts/soehne/soehne-kraftig.woff2',
                '/fonts/soehne/soehne-mono-buch-kursiv.woff2',
                '/fonts/soehne/soehne-mono-buch.woff2',
                '/fonts/soehne/soehne-mono-halbfett.woff2',
                '/_next/static/chunks/012ff928-385705181ba431e9.js',
                '/_next/static/chunks/1230-8f311937066d317d.js',
                '/_next/static/chunks/1564-4aba9bd4a62953e4.js',
                '/_next/static/chunks/1724.458548774e7e9538.js',
                '/_next/static/chunks/1966.293545626fb83130.js',
                '/_next/static/chunks/1f110208-24bf6c2e080e0308.js',
                '/_next/static/chunks/2802bd5f-2db666e4606fc7ff.js',
                '/_next/static/chunks/30750f44.a60fa59b43352d38.js',
                '/_next/static/chunks/3389-9da26f1e0f0823a9.js',
                '/_next/static/chunks/3504-a12ba7bcff4f7847.js',
                '/_next/static/chunks/3551-b3787b4957be36b0.js',
                '/_next/static/chunks/3a34cc27-8dc6bbd1d3306d52.js',
                '/_next/static/chunks/4521-b0cabf35ae0d8690.js',
                '/_next/static/chunks/4984-2164c4b7cb3aea91.js',
                '/_next/static/chunks/5629.6b0a26c1b914cba9.js',
                '/_next/static/chunks/6493-f95fb76654babf4a.js',
                '/_next/static/chunks/667-a012e14bddf7fc0b.js',
                '/_next/static/chunks/68a27ff6-f9f204be935e10d1.js',
                '/_next/static/chunks/7483-2c0a5d1877c6da1d.js',
                '/_next/static/chunks/7638-b75c3ed66fbe3e25.js',
                '/_next/static/chunks/7851-f028dc8368e400fe.js',
                '/_next/static/chunks/8937-e8acc7b8fc475182.js',
                '/_next/static/chunks/8948-6595c46a7bd0d3d3.js',
                '/_next/static/chunks/9271.5e44d7888ace4397.js',
                '/_next/static/chunks/bd26816a-796eab5008811694.js',
                '/_next/static/chunks/framework-10a404587b40544b.js',
                '/_next/static/chunks/main-664b20fa39df3103.js',
                '/_next/static/chunks/pages/default-79b3a53618f07b71.js',
                '/_next/static/chunks/pages/app-d78f57764d11b9a7.js',
                '/_next/static/chunks/pages/error-97106a6822dc2ecb.js',
                '/_next/static/chunks/pages/share/shareParams-14de2884ecad57fe.js',
                '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js',
                '/_next/static/chunks/webpack-9e1ebc95eb273260.js',
                '/_next/static/css/2639acab19a371b1.css',
                '/_next/static/oDTsXIohP85MnLZj7TlaB/buildManifest.js',
                '/_next/static/oDTsXIohP85MnLZj7TlaB/ssgManifest.js',
            ]);
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                    if (response) {
                        return response;
                    }
                    return fetch(event.request);
                }
            )
    );
});
