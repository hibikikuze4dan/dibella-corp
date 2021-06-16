const energy_subsystem = {
  title: "Energy Subsystem",
  multipleChoice: false,
  description: [
    "All gynoids need power in order to run. You must choose a energy system that powers your gynoid, you can only choose 1 energy subsystem. While your gynoid won't need sleep, she can sleep in order to conserve power.",
  ],
  choices: [
    {
      title: "Solar Powered",
      description: [
        "Your gynoid will be powered by solar energy. She will need to spend a lot of time outside in order to absorb all the energy she needs. Solar powered gynoids have a rather limited power battery and are ill suited for combat.",
      ],
      cost: 5,
      requirements: [],
    },
    {
      title: "Energy Cell",
      description: [
        "Your gynoid will run on electricity, she has a large energy cell which she can recharge by using her connection cable to connect to any electric outlet or machine.",
      ],
      cost: 5,
      requirements: ["Connection Cable"],
    },
    {
      title: "Infinity Core",
      description: [
        "By installing a infinity core inside your gynoid, she will be capable of generating her own energy. Infinity cores are optimal for combat and are efficient enough to negate your gynoids need to sleep in order to conserve energy.",
      ],
      cost: 15,
      requirements: [],
    },
  ],
};

export default energy_subsystem;
