import {version} from '../package.json';

export const APP_VERSION = version;

export const SECTIONS = [
    {
        name: 'Mídia',
        links: [
            { name: 'Twitch', url: 'https://www.twitch.tv/', id: 'twitch' },
            { name: 'YouTube', url: 'https://www.youtube.com/', id: 'youtube' },
            { name: 'SoundCloud', url: 'https://soundcloud.com/', id: 'soundcloud' },
            { name: 'Prime Video', url: 'https://www.primevideo.com/', id: 'primevideo' },
            { name: 'Netflix', url: 'https://www.netflix.com/browse', id: 'netflix' },
        ]
    },
    {
        name: 'Social',
        links: [
            { name: 'Linkedin', url: 'https://www.linkedin.com/in/eduardo-rotundaro/', id: 'linkedin' },
            { name: 'Instagram', url: 'https://www.instagram.com/?hl=pt-br', id: 'instagram' },
            { name: 'Reddit', url: 'https://www.reddit.com/', id: 'reddit' },
        ]
    },
    {
        name: 'Produtividade',
        links: [
            { name: 'Google Drive', url: 'https://drive.google.com/drive/my-drive', id: 'googledrive' },
            { name: 'One Drive', url: 'https://onedrive.live.com/', id: 'onedrive' },
            { name: 'Dropbox', url: 'https://www.dropbox.com/', id: 'dropbox' },
            { name: 'Gmail', url: 'https://mail.google.com/mail/ca/u/0/#inbox', id: 'gmail' },
            { name: 'Trello', url: 'https://trello.com/eduardohenriquerotundaro/board', id: 'trello' },
            { name: 'Tradutor', url: 'https://translate.google.com.br/?hl=pt-BR', id: 'translate' },
        ]
    },
];
