let locale = "en";
let messages = {};

export function getLocale() {
    return locale;
}

export function setLocale(newLocale) {
    if (typeof newLocale !== "string") {
        throw Error('Locale must be a string');
    }

    locale = newLocale;
}

export function getMessage(key) {
    if (0 === Object.keys(messages).length) {
        throw Error('No messages defined');
    }

    if (messages.hasOwnProperty(key)) {
        return messages[key];
    }

    return null;
}

export function getMessages() {
    if (0 === Object.keys(messages).length) {
        throw Error('No messages defined');
    }

    return messages;
}

export function setMessages(newMessages) {
    if (typeof newMessages !== "object") {
        throw Error('Messages must be an object');
    }

    messages = newMessages;
}
