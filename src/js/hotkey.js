class HotKey {
    constructor(player) {
        if (player.options.hotkey) {
            document.addEventListener('keydown', (e) => {
                if (player.focus) {
                    const tag = document.activeElement.tagName.toUpperCase();
                    const editable = document.activeElement.getAttribute('contenteditable');
                    if (tag !== 'INPUT' && tag !== 'TEXTAREA' && editable !== '' && editable !== 'true') {
                        const event = e || window.event;
                        let percentage;
                        switch (event.keyCode) {
                            case 32:
                                event.preventDefault();
                                player.toggle();
                                break;
                            case 37:
                                event.preventDefault();
                                if (player.options.live) {
                                    break;
                                }
                                player.seek(player.video.currentTime - 5);
                                player.controller.setAutoHide();
                                break;
                            case 39:
                                event.preventDefault();
                                if (player.options.live) {
                                    break;
                                }
                                player.seek(player.video.currentTime + 5);
                                player.controller.setAutoHide();
                                break;
                            case 38:
                                event.preventDefault();
                                percentage = player.volume() + 0.1;
                                player.volume(percentage);
                                break;
                            case 40:
                                event.preventDefault();
                                percentage = player.volume() - 0.1;
                                player.volume(percentage);
                                break;
                        }
                    }
                }
            });
        }

        document.addEventListener('keydown', (e) => {
            const event = e || window.event;
            switch (event.keyCode) {
                case 27:
                    if (player.fullScreen.isFullScreen('web')) {
                        player.fullScreen.cancel('web');
                    }
                    break;
            }
        });
    }
}

export default HotKey;
