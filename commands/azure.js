module.exports = {
    name: 'azure',
    description: 'Gets link to Azure student starter offer',
    usage: '',
    args: false,
    enabled: true,
    async execute(client, message, args) {
        message.reply('https://azure.microsoft.com/en-us/offers/ms-azr-0144p/');
    }
}