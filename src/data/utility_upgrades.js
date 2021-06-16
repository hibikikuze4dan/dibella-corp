const utility_upgrades = {
  title: "Utility Upgrades",
  multipleChoice: true,
  description: [
    "Our gynoids are so lifelike and so advanced it can be easy to forget that they are machines and as a machine they can be equipped with a multitude of high tech devices to enrich your life. Ever wanted a holographic projector, why not integrate one into your gynoid?",
  ],
  choices: [
    {
      title: "Connection Cable",
      description: [
        "Your gynoid comes equipped with a discreet omni port connection cable which she can eject from her body and use to link up with any machine, the machine don't even need a cable port for her to link up with it. While linked up to a machine your gynoid can operate it, as long as there are no firewalls, passwords or other safety measures barring her way.",
      ],
      cost: 5,
      cardType: "single",
      requirement: [],
    },
    {
      title: "Wireless Connection",
      description: [
        "Your gynoid is able to link up with any machine that has a wireless connection. She can also access internet, radio and television with her wireless connection. While linked up to a machine your gynoid can operate it, as long as there are no firewalls, passwords or other safety measures barring her way.",
      ],
      cost: 10,
      cardType: "single",
      requirement: [],
    },
    {
      title: "Hacking",
      description: [
        "Your gynoid can hack, control and manipulate any machine that she is linked up with. It doesn't matter what kind of security system the machine has, there is no machine that she can't hack.",
      ],
      cost: 25,
      cardType: "single",
      requirement: ["Connection Cable", "Wireless Connection"],
    },
    {
      title: "Holographic Projector",
      description: [
        "A holographic projector allows your gynoid to project holographic images up to 3 meters away from her body. The combined size of all of the holograms she projects can't exceed the total size of 2 cubic meters. For example this projector can be used to create a holographic screen that displays a recorded movie from the internet, television or some other media through a Connection Cable or Wireless Connection.",
      ],
      cost: 15,
      cardType: "single",
      requirement: [],
    },
    {
      title: "Solid Holograms",
      description: [
        "Your gynoids holographic projector is capable of projecting solid holograms by the manipulation of photons contained within force fields to give the hologram substance as well as actual matter. For example this can be used to create solid clothes, but it can't create a indestructible wall.",
      ],
      cost: 10,
      cardType: "single",
      requirement: ["Holographic Projector"],
    },
    {
      title: "Entertainment System",
      description: [
        "Your gynoid is capable of producing movies, songs, tv series, games and other entertainment media that is perfectly tailored after your tastes. The time of production will vary in length and can take up to 1 second to 1 month, the production won't impede your gynoids ability to socially interact with you. A Connection Cable, Wireless Connection or/and Holographic Projector will be necessary to interact with the produced content.",
      ],
      cost: 25,
      cardType: "single",
      requirement: [],
    },
    {
      title: "Telelink Implant",
      description: [
        "A telelink implat will be installed in your gynoid. This implant will allow her to use the nanomachines in your brain to send and receive information. It will basically allow you to non-verbally communicate with your android, the communication will be similar to telepathy.",
      ],
      cost: 5,
      cardType: "single",
      requirement: [],
    },
    {
      title: "Teleportation Module",
      description: [
        "A teleportation module gives your gynoid the ability to teleport herself and up to 2 persons, by generating artificial wormholes. Your gynoid will need the geographic coordinates to the location which she teleports to, in order to make the necessary calculations.",
      ],
      cost: 15,
      cardType: "single",
      requirement: [],
    },
    {
      title: "Medic",
      description: [
        "Your gynoid will possess extensive medical knowledge and be equipped with state of the art medical tools. Among other things she will be able to regenerate lost limbs, cure diseases, bring someone back from the brink of death and cure birth defects such as bad eye sight.",
      ],
      cost: 15,
      cardType: "single",
      requirement: [],
    },
  ],
};

export default utility_upgrades;
