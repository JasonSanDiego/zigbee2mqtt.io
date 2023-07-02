"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[80749],{900190:(e,t,r)=>{r.r(t),r.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-98143184","path":"/advanced/zigbee/02_improve_network_range_and_stability.html","title":"Improve network range and stability","lang":"en-US","frontmatter":{"pageClass":"content-page"},"excerpt":"","headers":[{"level":2,"title":"Adapter","slug":"adapter","link":"#adapter","children":[]},{"level":2,"title":"Avoid devices from AwoX","slug":"avoid-devices-from-awox","link":"#avoid-devices-from-awox","children":[]},{"level":2,"title":"USB based adapter","slug":"usb-based-adapter","link":"#usb-based-adapter","children":[{"level":3,"title":"Try different orientations of the adapter","slug":"try-different-orientations-of-the-adapter","link":"#try-different-orientations-of-the-adapter","children":[]}]},{"level":2,"title":"Reduce Wi-Fi interference by changing the Zigbee channel","slug":"reduce-wi-fi-interference-by-changing-the-zigbee-channel","link":"#reduce-wi-fi-interference-by-changing-the-zigbee-channel","children":[]},{"level":2,"title":"Interference from other 2.4 GHz devices","slug":"interference-from-other-2-4-ghz-devices","link":"#interference-from-other-2-4-ghz-devices","children":[]},{"level":2,"title":"Adding routers to your network","slug":"adding-routers-to-your-network","link":"#adding-routers-to-your-network","children":[]},{"level":2,"title":"Hardware","slug":"hardware","link":"#hardware","children":[]},{"level":2,"title":"Broadcasts","slug":"broadcasts","link":"#broadcasts","children":[]}],"git":{"updatedTime":1688280372000},"filePathRelative":"advanced/zigbee/02_improve_network_range_and_stability.md"}')},251930:(e,t,r)=>{r.r(t),r.d(t,{default:()=>H});var a=r(166252);const i=(0,a._)("h1",{id:"improve-network-range-and-stability",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#improve-network-range-and-stability","aria-hidden":"true"},"#"),(0,a.Uk)(" Improve network range and stability")],-1),n=(0,a._)("p",null,"In case you are experiencing an unstable or bad network range you can do the following things to improve your network.",-1),o=(0,a._)("h2",{id:"adapter",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#adapter","aria-hidden":"true"},"#"),(0,a.Uk)(" Adapter")],-1),s=(0,a._)("h2",{id:"avoid-devices-from-awox",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#avoid-devices-from-awox","aria-hidden":"true"},"#"),(0,a.Uk)(" Avoid devices from AwoX")],-1),l=(0,a._)("p",null,"It is known that AwoX devices cause network issues. In case you are having issues, remove them from your network.",-1),d=(0,a._)("h2",{id:"usb-based-adapter",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#usb-based-adapter","aria-hidden":"true"},"#"),(0,a.Uk)(" USB based adapter")],-1),h=(0,a._)("p",null,"The range of these adapters can greatly be improved when connecting them with an USB extension cable instead of directly plugging it into the computer (e.g. Raspberry Pi). When plugged directly into the computer, the antenna suffers from interference of radio signals and electrical components of the computer. Also be sure not to position the adapter too close to any other radio transmitting devices (e.g. a Wi-Fi router) or an SSD.",-1),c=(0,a._)("strong",null,"USB extension cable",-1),g={href:"https://www.reddit.com/r/homeassistant/comments/10ebkis/psareminder_about_zigbee_interference/",target:"_blank",rel:"noopener noreferrer"},u=(0,a._)("strong",null,"Do not underestimate this!",-1),p={href:"https://www.unit3compliance.co.uk/2-4ghz-intra-system-or-self-platform-interference-demonstration/",target:"_blank",rel:"noopener noreferrer"},m=(0,a.uE)('<p>Aditionally, it may help to plug the adapter to a USB 2 instead of USB 3 port.</p><h3 id="try-different-orientations-of-the-adapter" tabindex="-1"><a class="header-anchor" href="#try-different-orientations-of-the-adapter" aria-hidden="true">#</a> Try different orientations of the adapter</h3><p>RF connection between the adapter and other devices also depends on the way it is oriented in space. You might be having very poor <code>linkquality</code> reports and intermittent ping failures but once the adapter is rotated a little it all can change greatly without re-locating the coordinator far away. Try to experiment with positioning and orienting the adapter in space while monitoring the <code>linkquality</code> values reported. You might find it useful to buy a small rotating USB connector like this:</p><p><img src="https://i.imgur.com/AI41Oxz.png" alt="rotating USB connector"></p><h2 id="reduce-wi-fi-interference-by-changing-the-zigbee-channel" tabindex="-1"><a class="header-anchor" href="#reduce-wi-fi-interference-by-changing-the-zigbee-channel" aria-hidden="true">#</a> Reduce Wi-Fi interference by changing the Zigbee channel</h2><p><strong>Changing the Zigbee channel requires repairing of all your devices!</strong></p>',6),f={href:"https://www.metageek.com/training/resources/zigbee-wifi-coexistence/",target:"_blank",rel:"noopener noreferrer"},b=(0,a._)("code",null,"channel",-1),k=(0,a._)("code",null,"configuration.yaml",-1),w=(0,a._)("h2",{id:"interference-from-other-2-4-ghz-devices",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#interference-from-other-2-4-ghz-devices","aria-hidden":"true"},"#"),(0,a.Uk)(" Interference from other 2.4 GHz devices")],-1),_=(0,a._)("p",null,"Any device using the open 2.4 GHz spectrum could interfere with Zigbee such as Bluetooth or gaming devices like Logitech “Unifying” or “Lightspeed” or Razer “Hyperspeed Wireless”.",-1),v=(0,a._)("h2",{id:"adding-routers-to-your-network",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#adding-routers-to-your-network","aria-hidden":"true"},"#"),(0,a.Uk)(" Adding routers to your network")],-1),y={href:"https://en.wikipedia.org/wiki/Zigbee",target:"_blank",rel:"noopener noreferrer"},U=(0,a._)("p",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/routing1.jpg",alt:"The signal could be too weak for the message to reach its target."})],-1),z={href:"https://www.zigbee2mqtt.io/guide/configuration/adapter-settings.html",target:"_blank",rel:"noopener noreferrer"},x=(0,a._)("p",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/routing2.jpg",alt:"More transmission power on the sender side might not be sufficient for a complete message roundtrip."})],-1),Z=(0,a._)("p",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/routing3.jpg",alt:"Routers can stabilize the complete message roundtrip."})],-1),W={href:"https://www.zigbee2mqtt.io/devices/ZBDongle-E.html",target:"_blank",rel:"noopener noreferrer"},T={href:"https://www.zigbee2mqtt.io/devices/8719514301481.html#philips-8719514301481",target:"_blank",rel:"noopener noreferrer"},q={href:"https://www.zigbee2mqtt.io/devices/S26R2ZB.html",target:"_blank",rel:"noopener noreferrer"},A={href:"https://github.com/Koenkk/zigbee2mqtt/issues/10282",target:"_blank",rel:"noopener noreferrer"},B={href:"https://www.zigbee2mqtt.io/guide/usage/mqtt_topics_and_messages.html#zigbee2mqtt-bridge-request",target:"_blank",rel:"noopener noreferrer"},S=(0,a._)("code",null,"zigbee2mqtt/bridge/request/networkmap",-1),F={href:"https://software-dl.ti.com/simplelink/esd/plugins/simplelink_zigbee_sdk_plugin/1.60.01.09/exports/docs/zigbee_user_guide/html/zigbee/developing_zigbee_applications/z_stack_developers_guide/z-stack-overview.html#routing",target:"_blank",rel:"noopener noreferrer"},I=(0,a.uE)('<h2 id="hardware" tabindex="-1"><a class="header-anchor" href="#hardware" aria-hidden="true">#</a> Hardware</h2><p>Although Zigbee2MQTT does not require many resources, the hardware you are running Zigbee2MQTT on can impact the performance. This is especially true when using low-power hardware like the Raspbery Pi 3. Make sure that enough resources (CPU/memory) is free. For example, running Home Assistant + Zigbee2MQTT Home Assistant addon on the Raspberry Pi 3 may give bad performance.</p><h2 id="broadcasts" tabindex="-1"><a class="header-anchor" href="#broadcasts" aria-hidden="true">#</a> Broadcasts</h2><p>Zigbee traffic can be categorized as either <em>Unicast</em> or <em>Broadcast</em>:</p><ul><li><em>Unicast</em> is an addressed message, usually between a Zigbee device and the coordinator, possibly through some intermediate devices</li><li><em>Broadcast</em> is a special type of message that is designed to reach <strong>all</strong> devices in the network</li></ul><p>When a device receives a broadcast message for the first time, it will re-transmit it at least once. The device keeps track of broadcasts that have recently been re-transmitted to prevent repeating messages forever. For large networks, broadcasts can generate a lot of traffic, and it takes time for the message to propagate to all devices.</p>',6),R={href:"https://www.silabs.com/documents/login/application-notes/an1138-zigbee-mesh-network-performance.pdf",target:"_blank",rel:"noopener noreferrer"},C={},H=(0,r(983744).Z)(C,[["render",function(e,t){const r=(0,a.up)("RouterLink"),C=(0,a.up)("ExternalLinkIcon");return(0,a.wg)(),(0,a.iD)("div",null,[i,n,o,(0,a._)("p",null,[(0,a.Uk)("Use a "),(0,a.Wm)(r,{to:"/guide/adapters/"},{default:(0,a.w5)((()=>[(0,a.Uk)("recommended")])),_:1}),(0,a.Uk)(" adapter, especially the CC2530 and CC2531 are known to perform poorly.")]),s,l,d,h,(0,a._)("p",null,[(0,a.Uk)("A "),c,(0,a.Uk)(" of 50 cm is already enough to reduce the interference. Preferably get one with shielding as this may give better results ("),(0,a._)("a",g,[(0,a.Uk)("source"),(0,a.Wm)(C)]),(0,a.Uk)(").")]),(0,a._)("p",null,[u,(0,a.Uk)(" Placing your adapter close to an USB port can kill the radio signal entirely as demonstrated in "),(0,a._)("a",p,[(0,a.Uk)("this article"),(0,a.Wm)(C)]),(0,a.Uk)(".")]),m,(0,a._)("p",null,[(0,a.Uk)("As Wi-Fi and Zigbee both operate on the same frequency space (2.4 GHz), they can interfere with each other. By using the correct Zigbee channel, interference with Wi-Fi can (partly) be avoided. A good article explaining this is "),(0,a._)("a",f,[(0,a.Uk)("Zigbee and Wi-Fi Coexistence"),(0,a.Wm)(C)]),(0,a.Uk)(".")]),(0,a._)("p",null,[(0,a.Uk)("To change the Zigbee channel Zigbee2MQTT uses you have to set the "),(0,a.Wm)(r,{to:"/guide/configuration/zigbee-network.html"},{default:(0,a.w5)((()=>[b,(0,a.Uk)(" in "),k])),_:1}),(0,a.Uk)(".")]),w,_,v,(0,a._)("p",null,[(0,a.Uk)('"Zigbee is a low-power wireless mesh network standard targeted at battery-powered devices" (see '),(0,a._)("a",y,[(0,a.Uk)("Wikipedia"),(0,a.Wm)(C)]),(0,a.Uk)("). Yet, low transmission power can be the cause of an unstable or unreliable network:")]),U,(0,a._)("p",null,[(0,a.Uk)("Zigbee2MQTT enables the user to "),(0,a._)("a",z,[(0,a.Uk)("increase the transmission power"),(0,a.Wm)(C)]),(0,a.Uk)(" for some coordinator models. However, this simple measure might yield to a network with weird behavior, if messages to an end device reach their target, but responses (or messages) from that end device do not reliably reach the coordinator:")]),x,(0,a._)("p",null,[(0,a.Uk)("Introducing a router ("),(0,a.Wm)(r,{to:"/advanced/zigbee/01_zigbee_network.html"},{default:(0,a.w5)((()=>[(0,a.Uk)("read more about this")])),_:1}),(0,a.Uk)(") can improve the forward path as well as the return path:")]),Z,(0,a._)("p",null,[(0,a.Uk)("You might choose a dedicated router (for example, a "),(0,a._)("a",W,[(0,a.Uk)("SONOFF ZBDongle-E based router"),(0,a.Wm)(C)]),(0,a.Uk)(") or a mains-powered Zigbee device (for example, a "),(0,a._)("a",T,[(0,a.Uk)("Hue lamp"),(0,a.Wm)(C)]),(0,a.Uk)(") to stabilize your network. Almost all AC powered devices will serve as a router.")]),(0,a._)("p",null,[(0,a.Uk)("Please note that there are routers of mediocre quality that might not harmonize well with your network (for example, some versions of the "),(0,a._)("a",q,[(0,a.Uk)("SONOFF Smart Plug S26R2ZB"),(0,a.Wm)(C)]),(0,a.Uk)(" are "),(0,a._)("a",A,[(0,a.Uk)("known to be limited"),(0,a.Wm)(C)]),(0,a.Uk)("). This may yield in message routing errors. In case you have such devices in your network, it might help to add additional routers of better quality and bind your devices to these routers (re-pairing devices with “Permit join” restricted to the new/better router) to improve the overall network performance.")]),(0,a._)("p",null,[(0,a.Uk)("If you assume to have routing problems, try "),(0,a._)("a",B,[(0,a.Uk)("sending an MQTT request to the bridge"),(0,a.Wm)(C)]),(0,a.Uk)(" to the topic "),S,(0,a.Uk)(" to retrieve a map of your Zigbee network including routes.")]),(0,a._)("p",null,[(0,a.Uk)("For more technical details on Zigbee routing, see the "),(0,a._)("a",F,[(0,a.Uk)('"5. Routing" in the TI Z-Stack User Guide'),(0,a.Wm)(C)]),(0,a.Uk)(", for example.")]),I,(0,a._)("p",null,[(0,a.Uk)("Zigbee can only sustain an average rate of 1 broadcast per second, and multiple broadcasts within a short timespan increases latency. For more information, "),(0,a._)("a",R,[(0,a.Uk)("see this application note by Silicon Labs"),(0,a.Wm)(C)]),(0,a.Uk)(".")]),(0,a._)("p",null,[(0,a.Uk)("Broadcasts are mostly used for network management tasks such as finding routes to devices, but also by "),(0,a.Wm)(r,{to:"/guide/usage/groups.html"},{default:(0,a.w5)((()=>[(0,a.Uk)("Zigbee Groups")])),_:1}),(0,a.Uk)(" and "),(0,a.Wm)(r,{to:"/advanced/zigbee/01_zigbee_network.html"},{default:(0,a.w5)((()=>[(0,a.Uk)("Green Power devices")])),_:1}),(0,a.Uk)(". It is generally recommended to use broadcasts sparingly.")])])}]])}}]);