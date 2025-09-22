# Pesquisa em technologias de baixo custo e impacto saudável

[Diário de desenovolvimento](http://muchmuch.coffee:8807/%25hMC%2FIx%2FmnDvk0KYGcvXGo%2FKt8UuegWYz6vB91RyhIKQ%3D.sha256)

## Introdução


We seek to investigate and experiment with low cost and off-grid technologies aiming mainly at traditional communities such as quilombolas and indigenous.

The World Wide Web is mainly built with consumers in mind and that tends to drive how community members use digital tools. Low bandwidth transports, such as LoRa and HF Radio, and sneakernets[[1]](https://en.wikipedia.org/wiki/Sneakernet) (physical transportation of data) are a great way to introduce communication and information technologies in a way that the communities can gradually and safely open themselves to the global network.

LoRa[[2]](https://en.wikipedia.org/wiki/LoRa) (Long Range) has the advantage of being really cheap and low power (82 USD for a fully autonomous solar node[[3]](http://muchmuch.coffee:8807/%FA25S3+35/edI0xg2+jzLOECcCa+sviaQTbRUMjA9KQ=.sha256)), but can only output from 250bit/s and 11kbit/s[[4]](https://www.thethingsnetwork.org/docs/lorawan/limitations.html), which is way less then dialup did decades ago. But such small bits of data could save lifes if dealt with care. The Meshtastic[[5]](https://www.meshtastic.org/) project was chosen as it has a thriving online community of supporters and developers.The main devs have already shown interest in our use case by tweaking the firmware based on our needs[[6]](https://meshtastic.discourse.group/t/meshtastic-to-connect-isolated-villages). In order for the end-user to communicate with the LoRa devices[[7]](https://www.meshtastic.org/#supported-hardware) an Android app[[8]](https://play.google.com/store/apps/details?id=com.geeksville.mesh) with a familiar text-messaging interface is used. The communication between devices happens thru Bluetooth, for energy effiency, but a WiFi options is also being built[[9]](https://github.com/meshtastic/Meshtastic-device/issues/413) so that the LoRa device can either connect to an existing WiFi network or create an access point where users can use a messaging interface on the browser.

Various distributed (or P2P[[10]](https://en.wikipedia.org/wiki/Peer-to-peer)) protocols enable the physical tranporation of data, called sneakernets, in a way that someone carrying a device (phone for example) could sync data for everyone in their village while visiting another village, and bring new data back home. Protocols such as Dat[[11]](http://dat.land/) or Secure Scuttlebutt[[12]](https://scuttlebutt.nz/) don't rely on centralized nodes, turning every device into a node that can communicate over WiFi or Bluetooth, enabling data sovereignty for the community network if dealt with care[[13]](https://www.gida-global.org/care). They also rely on very smart cryptography to make information readable only to the intended receivers. All this enables creating acessible and secure applications for tradition communities, good examples being Mapeo[[14]](http://www.digital-democracy.org/mapeo/) and Āhau[[15]](https://www.ahau.io/), using end-user devices (phones and computers) as infraestructure.


Community servers are a financially acessible way[[16]](https://www.adafruit.com/product/2885) to make information available for a community. The use of distributed protocols to communicate and update the server enables the community to take responsability over the content and services that people will be using, creating a healthy curation barrier from unwanted data.

By researching and experimenting with these three technologies (LoRa, *p2p* protocols and community-servers) we intend to create acessible and safe delay tolerant networks for traditional communities that either lack any form of communication/information technology; or intentionally choose to safe-guard themselves from the corporate web. Besides further testing LoRa as a transport, the main challenges we see ahead are of creating interoperability layers for the three technologies to work in harmony while satisfying the communication and information needs of the communities. A first step in such a direction we would like to extend the Feedless [[17]](https://feedless.social/) P2P social network to be more community-network friendly (with translations for example), include it in our community-server[[18]](https://github.com/MoinhoDigital/community-server) stack and extend it to communicate over LoRa.


## Materiais e Métodos

- Documentação: gravação e edição de vídeo
- Autonomous long range repeaters: R$ 589,85 / $ 112,28 USD
- Autonomous repeaters: 439,15 / $ 82,68 USD
- Mobile nodes: 339,65 / $ 59,78 USD


## Planejamento

- Out/Nov 2020 - Experimentação em campo território Krahô usando protocolo de mesh em LoRa Meshtastic (2000 USD)
- Integração Secure Scutlebutt (Feedless) com Meshtastic (40h / 400 USD)
- Adaptação do aplicativo Feedless para uso com servidor comunitário (40h / 400 USD)
- Método de levantamento de comunidades para possíveis implementações em campo e remotas


## Entregáveis

- Documentação audio-visual sobre os protocolos distribuídos **500 USD**
    - O que são protocolos distribuídos ou P2P?
- Documentação audio-visual sobre o processo de compra, montagem e instalação de servidores comunitários **500 USD**
    - O que é um servidor comunitário?

- Documentação audio-visual sobre o processo de compra, montagem e instalação dos nós de LoRa **1000 USD**
    - O que é LoRa?
    - Projetos existentes para LoRa
    - Placas com rádios LoRa e onde comprar
    - Montagem de um nó repetidor
    - Montagem de um nó móvel
    - Antena: como funciona?
    - Materiais para construir antena
    - Montagem de atena plano terra
    - Montagem de antena yagi
    - Afinação de antena usando Nano VNA (compra e calibragem)
    - Afinação de antena usando Nano VNA (SWR e Carta de Smith)
    - Afinação de antena usando Nano VNA (calculadoras de antena)
- Implementação em comunidade **2000 USD (parte por SSB)**:
    - 2x Nós Repetidores Longo alcance **230 USD**
    - 2x Nós móveis **130 USD**
    - 6x Nós Repetidores **170 USD**
    - Nano VNA **80 USD**
    - 2000Km - Uno 1.0 **150 USD**
    - 5 dias hotel **100 USD**
    - Alimentação 15 dias **100 USD**
    - Trabalho em campo 60h R$50/h **550 USD**
- ~~Repositório e documentação do servidor comunitário com serviços **800 USD**~~:
    - Feedless (adaptado)
    - Kolibri
    - Jellyfin
    - Pi-Hole
    - CStatus
    - Portainer
    - Speedtest
- ~~Rede social que se comunica por Bluetooth, WiFi ou LoRa **400 USD**~~