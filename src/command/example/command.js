import * as Discord from "discord.js";

export const data = {
    name: "example",
    abbr: "e",
    types: {
        ChatInput: {
            name: "example",
            description: "This is an example command."
        },
        Message: {
            name: "Example command"
        }
    }
};

export async function ChatInputCommandInteraction(i) {
    const { message } = await getContent();
    i.reply("This command was run as an application command.\n\nMessage:\n>>> " + message);
}

export async function MessageContextMenuCommandInteraction(i) {
    const { message } = await getContent();
    i.reply("This command was run via a message's context menu.\n\nMessage:\n>>> " + message);
}

export async function messageCreate(m) {
    const { message } = await getContent();
    m.reply("This command was run via a message.\n\nMessage:\n>>> " + message);
}

async function getContent() {
    return await import(`./content.js?date=${Date.now()}`);
}
