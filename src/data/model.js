const model = {
  title: "Model Catalog",
  multipleChoice: false,
  description: [
    "These are our latest and most technologically advanced gynoids. You may choose 1 gynoid model. The alien object which you previously touched is a construction station, it contains all the materials necessary to construct your chosen gynoid. Each model comes with a different number of Customization points, these points can be spent to tailor your gynoid to meet your specific needs, we of the Dibella Corp recognize that all individuals are different and satisfaction can only be achieved by acknowledging the uniqueness of each of our customers. Normally we won't restrict a customers choices with Customization points, but the materials inside the construction station are finite.",
  ],
  choices: [
    {
      title: "Eve-E9",
      description: [
        "The Eve-E9 model is impossible to tell apart from a biological human from appearances alone. Unlike our other models, the Eve-E9 model can be made to look however you want. Have a thing for a certain celebrity or fictional character? Why not give your Eve-E9 model that appearance?",
      ],
      cost: 85,
      free: ["Internal Heating"],
      totalCostModifier: null,
    },
    {
      title: "Eve-E8",
      description: [
        "Just like the Eve-E9 model, the Eve-E8's appearance is fully customizable. However unlike the Eve-E9, Eve-E8 will have some minor details that will reveal it's artificial nature. But these details are easily concealed with the right clothes.",
      ],
      cost: 95,
      free: ["Inernal Heating"],
      totalCostModifier: null,
    },
    {
      title: "Lillith-S1",
      description: [
        "You won't need to buy a energysub system for this model. Lillith-S1 is completely design around our latest energy system, the protein converter. She is able to convert protein into energy by ingesting protein rich substances, like meat or sperm for example.",
      ],
      cost: 110,
      free: ["Internal Heating", "Propulsion System (wings)"],
      totalCostModifier: null,
    },
    {
      title: "Aphrodite-S6",
      description: [
        "If you are looking for a gynoid to cuddle with, this is the model for you! The Aphrodite- S6 model features a super soft and silky synthetic skin that feels absolutely amazing to touch. Reduce the cost of any Customization option you purchase by 5, to a minimum of 2.",
      ],
      cost: 100,
      free: ["Internal Heating"],
      totalCostModifier: null,
    },
    {
      title: "Nereid-S4",
      description: [
        "Nereid-S4 is a dedicated pleasure gynoid that features a semi translucent stomach section which allows you to see your own penis during penetration. Reduce the cost of any Orifice Enhancement option you purchase by 3, to a minimum of 2.",
      ],
      cost: 105,
      free: ["S.A.P."],
      totalCostModifier: null,
    },
    {
      title: "Venus-S2",
      description: [
        "The Venus-S2 model was developed to offer our customers the ultimate sexual experience, everything about this model is optimized for pleasure. Reduce the cost of any Orifice Enhancement and Customization options you purchase by 5, to a minimum of 2.",
      ],
      cost: 90,
      free: ["S.A.P."],
      totalCostModifier: null,
    },
    {
      title: "Esotre-S3",
      description: [
        "Eostre-S3 is our smallest and lightest model, weighing only 5kg. The Eostre-S3 model also features particularly strong legs, these legs allows her to move her hips at a unparalleled speed during sex positions like the cowgirl.",
      ],
      cost: 130,
      free: ["Mithril Composite"],
      totalCostModifier: null,
    },
    {
      title: "Ambrosia-S7",
      description: [
        "Unlike other gynoid models with mammary glands, Ambrosia-S7 can change the taste of her breast milk on command. Reduce the cost of any Orifice Enhancement option you purchase by 3 if the option affect the nipples.",
      ],
      cost: 115,
      free: ["Mammary Glands", "Polyflex (nipples)"],
      totalCostModifier: null,
    },
    {
      title: "Bifrost",
      description: [
        "The Bifrost-S6 model is a very expressive model, she will change color based on her mood and she will even change her eyes to reflect her emotions. For example her pupils can turn into hearts, flames, stars and other symbols.",
      ],
      cost: 125,
      free: ["Custom Color"],
      totalCostModifier: null,
    },
    {
      title: "Rheia-S6",
      description: [
        "The Rheia-S6 model features multiple sophisticated artificial wombs, all of her orifices can be impregnated. On command she can accelerate or decelerate the time of any pregnancy and inject her offspring with growth hormones to make them age faster until they reach a specified age.",
      ],
      cost: 105,
      free: ["Artificial Womb"],
      totalCostModifier: null,
    },
    {
      title: "Hermaphroditus-S1",
      description: [
        "Hermaphroditus-S1 combines the best aspects of male anatomy with female anatomy in an attempt to create something unique. Reduce the cost of any Orifice Enhancement option you purchase by 3 if the option affect the urethra.",
      ],
      cost: 120,
      free: ["Penis", "Polyflex (urethra)"],
      totalCostModifier: null,
    },
    {
      title: "Changeling-S1",
      description: [
        "The Changeling-S1 is almost entirely made out of liquid metal. This allows the Changeling to freely change form, shape, appearance and even voice. However the Changeling-S1 cannot change the color of the liquid metal.",
      ],
      cost: 105,
      free: ["Resizeable Assets"],
      totalCostModifier: null,
    },
    {
      title: "Freya-U4",
      description: [
        "The Freya-U4 model was developed to be a maid gynoid with combat capabilities. Reduce the cost of any Utility Upgrade and Assassination Assortment options you purchase by 3, to a minimum of 2.",
      ],
      cost: 105,
      free: ["S-Program"],
      totalCostModifier: null,
    },
    {
      title: "Hestia-U2",
      description: [
        "Hesita-U2 was designed to be a assistant/secretary gynoid. She excels at multitasking and data management. Reduce the cost of any Utility Upgrade option you purchase by 5, to a minimum of 2.",
      ],
      cost: 90,
      free: ["Holographic Projector", "Wireless Connection"],
      totalCostModifier: null,
    },
    {
      title: "Homunculus-U9",
      description: [
        "This model is a technological marvel, a perfect choice if entertainment and utility is something you value in a gynoid. Reduce the cost of any Utility Upgrade option you purchase by 10, to a minimum of 2.",
      ],
      cost: 85,
      free: ["Connection Cable", "Wireless Connection"],
      totalCostModifier: null,
    },
    {
      title: "Athena-U1",
      description: [
        "Athena-U1 was designed to be the ultimate teacher. With her groundbreaking telelink design she can send large files of information into the users mind and giving them instant theoretical mastery of complex subjects.",
      ],
      cost: 110,
      free: ["Telelink Implant"],
      totalCostModifier: null,
    },
    {
      title: "Gaia-U5",
      description: [
        "Interested in holographic technology? Then Gaia-U5 is the model for you. She can project holograms up to 150 meters away, but the total size of all of the holograms she projects can't exceed 100 cubic meters.",
      ],
      cost: 90,
      free: ["Holographic Projector", "Solid Holograms"],
      totalCostModifier: null,
    },
    {
      title: "Heaven-U3",
      description: [
        "The Heaven-U3 model was specifically designed to store many Als in a single gynoid. Reduce the cost of any Artificial Intelligence option you purchase by 10, to a minimum of 2.",
      ],
      cost: 90,
      free: ["Holographic Projector"],
      totalCostModifier: null,
    },
    {
      title: "Valhalla-U1",
      description: [
        "The Valhalla-U1 model contains the latest technological advances in virtual reality and entertainment software. With her telelink implant she can connect to your mind and make you experience true virtual reality.",
      ],
      cost: 50,
      free: ["Entertainment System", "Telelink Implant"],
      totalCostModifier: null,
    },
    {
      title: "Khaos-U6",
      description: [
        "Khaos-U6 is a highly customizable model full of possibilities and potential, she can be whatever you want her to be. A combat gynoid, a pleasure gynoid or a entertainment gynoid? Why not all three?",
      ],
      cost: 140,
      free: [],
      totalCostModifier: null,
    },
    {
      title: "Eir-U8",
      description: [
        "Eir-U8 was designed to be a dedicated stylist and a cosmetic surgeon. She can freely manipulate peoples bodies, change their appearance and even change their gender. Her operations are completely painless, we guarantee.",
      ],
      cost: 85,
      free: ["Medic", "Connection Cable"],
      totalCostModifier: null,
    },
    {
      title: "Valkyrie-C5",
      description: [
        "The Valkyrie-C5 is a swift combat model with excellent mobility, developed specifically for scouting, reconnaissance and sabotage. Reduce the cost of any Assassination Assortment option you purchase by 3, to a minimum of 2.",
      ],
      cost: 105,
      free: ["S-Program", "Mobility Wires", "Mithril Composite"],
      totalCostModifier: null,
    },
    {
      title: "Skadi-C7",
      description: [
        "Skadi-C7 is a open platform combat gynoid. She was designed to be highly adaptable and flexible to be able to fit into any kind of combat role. Reduce the cost of any Assassination Assortment option you purchase by 5, to a minimum of 2.",
      ],
      cost: 110,
      free: ["S-Program"],
      totalCostModifier: null,
    },
    {
      title: "Amazon-C3",
      description: [
        "Amazon-C3 is an utilitarian heavy-duty combat gynoid made for intense combat. Like the Athena-C7 model, the Amazon-C3 is highly adaptable and customizable. Reduce the cost of any Assassination Assortment option you purchase by 10, to a minimum of 2.",
      ],
      cost: 85,
      free: ["S-Program"],
      totalCostModifier: null,
    },
    {
      title: "Isis-C1",
      description: [
        "The Isis-C1 features a state of the art shield generator as well as a revolutionary miniature shield projector. The shield projector allows this model to project large wall like barriers. When struck with a energy based weapon, the shields can adapt and recalibrate their structure to reflect further fire.",
      ],
      cost: 110,
      free: ["S-Program", "Shield Generator"],
      totalCostModifier: null,
    },
    {
      title: "Witch-C2",
      description: [
        "Everything about the Witch- C2 model is optimized for magcore use. Normally a gynoid with a magcore can't create magnetic fields strong enough to stop or repel bullets, but not the Witch. She can shred tanks, juggle cars and drop airplanes from the sky.",
      ],
      cost: 95,
      free: ["S-Program", "Magcore"],
      totalCostModifier: null,
    },
    {
      title: "Nemesis-C4",
      description: [
        "The Nemesis-C4 model is a dedicated combat model, made to outgun and outlast it's enemies. The model is almost entirely made of Adamantium, which makes it incredibly hard to destroy.",
      ],
      cost: 55,
      free: [
        "Infinity Core",
        "S-Program",
        "Bullet Proof",
        "Enhanced Body",
        "Annihilation Ray (right arm)",
      ],
      totalCostModifier: null,
    },
    {
      title: "Ghost-C5",
      description: [
        "This stealth model features a highly advanced sound disruption module. When active, the module creates a field that cancel out all sound within 2 meters of the Ghost-C5, making the Ghost and any actions she takes completely soundless.",
      ],
      cost: 115,
      free: ["S-Program", "Cloaking Device"],
      totalCostModifier: null,
    },
    {
      title: "Excalibur-C7",
      description: [
        "The Excalibur-C7 model possesses unique hardware and software that gives her surreal combat skills with a blade. She can calculate the angles of ricocheting shoots and deflect incoming fire back at her enemies with her sword.",
      ],
      cost: 105,
      free: ["S-Program", "SS-Program", "Melee Weapon"],
      totalCostModifier: null,
    },
    {
      title: "Berserker-C3",
      description: [
        "The Berserker-C3 features cutting edge technology that allows her to absorb kinetic force through her skin and turn it into energy. Whenever she is hit, she will become both stronger and faster, making her more powerful the longer she fights.",
      ],
      cost: 90,
      free: ["S-Program", "Taser Hand", "Bullet Proof"],
      totalCostModifier: null,
    },
    {
      title: "Achlys-C7",
      description: [
        "The pheromones Achlys-C7 excretes contain microscopic nanomachines, once the pheromones have been inhaled, Achlys can remotly send a command to these nanomachines to release a chemical component that turns the pheromones into a deadly poison.",
      ],
      cost: 115,
      free: ["Scent", "Pheromones"],
      totalCostModifier: null,
    },
    {
      title: "Golem-C8",
      description: [
        "The Golem-C8 model is covered in a hyperalloy armor interlaced with polyflex nano- fibers. This advanced armor is capable of withstanding huge amounts of force, heat, stress and cold without breaking, in other words the Golem-C8 is virtually indestructible.",
      ],
      cost: 100,
      free: ["S-Program", "Bullet Proof", "Shield Generator"],
      totalCostModifier: null,
    },
    {
      title: "Bellona-C2",
      description: [
        "The Bellona-C2 features a revolutionary containment field system that allows her to change the shape of her particle blades. For example the blades could take the shape of axes, spears, claws, scythes, whips, swords or even shields.",
      ],
      cost: 95,
      free: ["S-Program", "x2 Particle Blade (right and left arm)"],
      totalCostModifier: null,
    },
    {
      title: "Sol-C1",
      description: [
        "The Sol-C1's frame is designed to take plasma weapons to the next level. Not only are the plasma cannons more destructive, they can switch between two firing modes, cannon mode and flamer mode. The cannon mode works similar to standard plasma canons while the flamer mode sprays out the plasma in a cone, similar to a flamethrower.",
      ],
      cost: 95,
      free: [
        "S-Program",
        "Internal Heating",
        "x2 Plasma Cannon (right and left arm)",
      ],
      totalCostModifier: null,
    },
    {
      title: "Chimera-C5",
      description: [
        "The Chimera-C5 model is a specialized combat gynoid, while she excels at aerial combat, she can hold her own on the ground as well. Thanks to her unique design that allows her to transform into a unlimited number of vehicles.",
      ],
      cost: 95,
      free: ["S-Program", "Propulsion System", "Spatial Folder", "Transformer"],
      totalCostModifier: null,
    },
    {
      title: "Medusa-C1",
      description: [
        "The Medusa-C1 is capable of projecting electromagnetic radiation from her head containing a subliminal code in it's frequency, which overloads the nervous system of any biological life form which eyes are directly exposed to it. Effectively freezing their motor functions and paralyzing their body. The paralysis is temporal and can be set to a specific duration, from 1 minute to 10 hours.",
      ],
      cost: 105,
      free: ["S-Program", "Enhanced Body"],
      totalCostModifier: null,
    },
    {
      title: "Queen-C6",
      description: [
        "The Queen-C6 is combat gynoid made for managing and controlling multiple combat drones. Any Assassination Assortment option you purchase for a Custom Drone can be shared with all of your other Custom Drones.",
      ],
      cost: 95,
      free: ["S-Program", "5x Custom Drone"],
      totalCostModifier: null,
    },
    {
      title: "Echidna-C4",
      description: [
        "Like the Queen-C6 model, Echidna-C4 is a combat gynoid made for controlling drones. Echidna excels at controlling highly advanced drones. Reduce the cost of any Assassination Assortment option you purchase for a Custom Drone by 10, to a minimum of 2.",
      ],
      cost: 70,
      free: ["S-Program", "Custom Drone"],
      totalCostModifier: null,
    },
    {
      title: "Centaur-C7",
      description: [
        "The Centaur-C7 was designed to be a mobile artillery gynoid, both impressive in size and fire power. With it's spatial folder and its quadrupedal design the Centaur can be equipped with the largest and most destructive weapons out of all our gynoid models.",
      ],
      cost: 110,
      free: ["S-Program", "Ballistic Gun (right arm)", "Spatial Folder"],
      totalCostModifier: null,
    },
  ],
};

model.choices = model.choices.map((choice) => ({
  ...choice,
  cost: 0 - choice?.cost,
}));

export default model;
