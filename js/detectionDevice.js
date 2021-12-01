const d = document,
    ua = navigator.userAgent;
console.log(ua);

export default function userDeviceInfo(userDevice) {
    const $userDevice = d.getElementById(userDevice),
        desktop = {
            windows: () => ua.match(/windows nt 10.0/i),
            linux: () => ua.match(/linux/i),
            mac: () => ua.match(/mac os/i),
            any: function() {
                return this.windows() || this.linux() || this.mac()
            },
        },

        browser = {
            chrome: () => ua.match(/chrome/i),
            safari: () => ua.match(/safari/i),
            firefox: () => ua.match(/firefox/i),
            opera: () => ua.match(/opera/i),
            edge: () => ua.match(/edge/i),
            any: function() {
                return this.chrome() || this.safari() || this.firefox() || this.opera() || this.edge();
            },
        },

        isMobile = {
            android: () => ua.match(/android/i),
            windowsPhone: () => ua.match(/windows phone/),
            ios: () => ua.match(/iphone|iphad|ipod/i),
            any: function() {
                return this.android() || this.windowsPhone() || this.ios();
            }

        }

    $userDevice.innerHTML = `<ul>
                            <li>User Agent <b>${ua}</b></li>
                            <li>Plataforma${isMobile.any() ? isMobile.any()  :  desktop.any() }</li>
                            </ul>`

    if (browser.edge) {
        console.log(browser.edge);
        $userDevice.innerHTML += `<p>Conteido que solo se ve en edge</p>`;
    } else {
        alert('otro contenido');
    }
}