const assassination_assortment = {
  title: "Assassination Assortment",
  description: [
    "To a lot of our clients love, companionship and pleasure is secondary. They want a bodyguard with unwavering loyalty or a lethal assassin capable of taking on impossible missions. Whatever your wish is, we can give your gynoid enough firepower to annihilate an army of trained soldiers. Don't worry too much about your gynoid getting damaged. All of our gynoids are equipped with nanorepairbots that can repair them when damaged. This process is rather slow and requires a lot of energy, repairs should preferably be done outside of combat.",
  ],
  multipleChoice: true,
  choices: [
    {
      title: "Blink System",
      description: [
        "By installing a blink system, your gynoid will be able teleport to any location within her field of vision without needing the geographic coordinates, as that will be automatically calculated based on her visual feed.",
      ],
      cost: 10,
      requirement: ["Teleportation Module"],
      cardType: "single",
      droneOption: false,
    },
    {
      title: "Mobility Wires",
      description: [
        "By purchasing this option you can greatly increase your gynoids speed and mobility. The mobility wires work by firing electromagnetic grappling hooks in rapid succession. When not in use the mobility wire system will retract itself into your gynoids body.",
      ],
      cost: 15,
      requirement: [],
      cardType: "single",
      droneOption: false,
    },
    {
      title: "Propulsion System",
      description: [
        "Your gynoid will be installed with a subdermal aerial propulsion system that allows your gynoid to fly and hover. Compared to mobility wires a aerial propulsion system is much faster when moving in a straight line, but slower when zigzagging and rapidly changing directions.",
      ],
      cost: 15,
      requirement: [],
      cardType: "single",
      droneOption: false,
    },
    {
      title: "Enhanced Vision",
      description: [
        "Your gynoids vision is greatly enhanced. She will also be able to switch between different vision modes such as normal vision, night vision, heat vision, binocular vision, microscopic vision and telescopic vision.",
      ],
      cost: 5,
      requirement: [],
      cardType: "single",
      droneOption: false,
    },
    {
      title: "Threat Sensor",
      description: [
        "Your gynoid will have a built in threat sensor which will alert her of danger, such as sneak attacks and sniper shoots made from a great distance. This will allow her to initiate defensive countermeasures like dodging or activating her shield generator.",
      ],
      cost: 5,
      requirement: [],
      cardType: "single",
      droneOption: false,
    },
    {
      title: "Cloaking Device",
      description: [
        "By installing a cloaking device inside your gynoid. She will gain the ability to cover her body in a field that reroutes light particles to grant her invisibility. The cloaking device will also hide her presence from radars and similar hardware.",
      ],
      cost: 15,
      requirement: [],
      cardType: "single",
      droneOption: false,
    },
    {
      title: "Bullet Proof",
      description: [
        "Even soft parts like synthetic skin can be made bulletproof by blending it with Nanoflex. A material that will automatically and instantly harden in response to physical trauma. While Nanoflex primary function is to deflect bullets, it also offers protection against primitive melee weapons.",
      ],
      cost: 20,
      requirement: [],
      cardType: "single",
      droneOption: false,
    },
    {
      title: "Temporal Accelerator",
      description: [
        "With a temporal accelerator your gynoid will be able to distort time around her body and accelerate it in order to achieve a phenomenon akin to super speed. Your gynoid will be fast enough to dodge bullets and outrun cars. When active the temporal accelerator drains a lot of power, extended use can easily exhaust your gynoid.",
      ],
      cost: 20,
      requirement: [],
      cardType: "single",
      droneOption: false,
    },
    {
      title: "Temporal Rewinder",
      description: [
        "Whenever a gynoid with a temporal rewinder is destroyed, if the temporal rewinder remains intact it will trigger a temporal anomaly that will revert the gynoid to it's state prior to it's destruction. The temporal anomaly will only affect the gynoid and no one else.",
      ],
      cost: 15,
      requirement: [],
      cardType: "single",
      droneOption: false,
    },
    {
      title: "Shield Generator",
      description: [
        "The latest force field technology allows us to downscale shield generators to fit inside gynoids. The energy shield will offer full protection against ranged weapons when active. The shield is quite brittle, it can resist sustained fire for a decent amount of time, but it's weak against energy based weapons.",
      ],
      cost: 15,
      requirement: [],
      cardType: "single",
      droneOption: false,
    },
    {
      title: "Hardened Shield",
      description: [
        "By upgrading the shield generator we can increase the efficiency and power of the shielding, this will give your gynoid into a living tank. The shield will be effective against any type of ranged weaponry. However extreme attacks will require large amount of energy to deflect, but your gynoid should be able to survive 5-10 nuclear bombs.",
      ],
      cost: 10,
      requirement: ["Shield Generator"],
      cardType: "single",
      droneOption: false,
    },
    {
      title: "Mithril Composite",
      description: [
        "By using a Mithril composite metal to construct your gynoid, we can reduce her weight while not compromising her structural integrity. Your gynoid will at most weigh between 10kg to 15kg, this extreme light weight will greatly enhance the mobility, speed and dexterity of your gynoid.",
      ],
      cost: 10,
      requirement: [],
      cardType: "single",
      droneOption: false,
    },
    {
      title: "S-Program",
      description: [
        "By installing our soldier program your gynoid will gain rudimentary knowledge of warfare, martial arts and essential combat skills. Your gynoid will gain skills equal to a human elite solider.",
      ],
      cost: 10,
      requirement: [],
      cardType: "single",
      droneOption: false,
    },
    {
      title: "SS-Program",
      description: [
        "By installing our super soldier program your gynoid will gain advanced knowledge of warfare, martial arts and combat. Your gynoid will possess uncanny combat skills that vastly surpasses the capabilities of any human soldier.",
      ],
      cost: 10,
      requirement: ["S-Program"],
      cardType: "single",
      droneOption: false,
    },
    {
      title: "Magcore",
      description: [
        "With a magcore your gynoid will be able to generate and manipulate magnetic fields within a range of 100 meters from her body. This ability can be used to use metallic shrapnel as projectiles, use metallic debris as a shield against bullets and levitate metal objects.",
      ],
      cost: 20,
      requirement: [],
      cardType: "single",
      droneOption: false,
    },
    {
      title: "Ballistic Gun",
      description: [
        "Your gynoid will have a subdermal ballistic gun hidden in one of her limbs. A ballistic gun can be anything from a minigun to a high caliber sniper rifle. Ballistic guns excels at killing infantry. This option can be purchased multiple times",
      ],
      cost: 10,
      requirement: [],
      cardType: "multi",
      droneOption: false,
    },
    {
      title: "Plasma Cannon",
      description: [
        "Your gynoid will have a subdermal plasma cannon hidden in one of her limbs. A plasma canon is much more destructive than a ballistic gun, but has a relatively low rate of fire and is best suited for destroying vehicles and buildings. This option can be purchased multiple times.",
      ],
      cost: 15,
      requirement: [],
      cardType: "multi",
      droneOption: false,
    },
    {
      title: "Annihilation Ray",
      description: [
        "By replacing one of your gynoids arms we can equip her with a annihilation ray. Like the name suggests the weapon unleashes a devastating ray, the ray is powerful enough to eradicate anything it touches on a molecular level.",
      ],
      cost: 25,
      requirement: [],
      cardType: "single",
      droneOption: false,
    },
    {
      title: "Magnetic Grip",
      description: [
        "Your gynoids hands and feet will be upgraded to allow her to activate a magnetic grip mode. This mode will allow your gynoid to scale any metal surface.",
      ],
      cost: 5,
      requirement: [],
      cardType: "single",
      droneOption: false,
    },
    {
      title: "Transformer",
      description: [
        "Choose 1 small vehicle, like a motorcycle, hoverboard, snow scooter, water scooter or something similar in size. Your gynoid is able to transform herself into your chosen vehicle, as a vehicle she will be fully functional and fuckable.",
      ],
      cost: 10,
      requirement: [],
      cardType: "single",
      droneOption: false,
    },
    {
      title: "Enhanced Body",
      description: [
        "By increasing the density of your gynoids muscle fibers, we can give her something akin to super strength. For example, she will be able to throw cars, jump between rooftops and throw people like they were rag dolls.",
      ],
      cost: 10,
      requirement: [],
      cardType: "single",
      droneOption: false,
    },
    {
      title: "Hand Taser",
      description: [
        "By rewiring some internal circuits, we can give your gynoid the ability to generate a electrical current with her hands. The current is strong enough to disrupt nerve signals and cause neuromuscular incapacitation. For 5 additional Customization points, we can modify the attack to fire arcs of lightning, giving it a range of 2 meters.",
      ],
      cost: 5,
      requirement: [],
      cardType: "double",
      droneOption: false,
    },
    {
      title: "Melee Weapon",
      description: [
        "Your gynoid will have a subdermal melee weapon hidden in one of her limbs. A melee weapon can be anything from a blade to a razor whip. The melee weapon will be made of adamantium, a virtually indestructible metal. This option can be purchased multiple times.",
      ],
      cost: 10,
      requirement: [],
      cardType: "multi",
      droneOption: false,
    },
    {
      title: "Particle Blade",
      description: [
        "Your gynoid will have a subdermal particle blade hidden in one of her limbs. A particle blade can cut through any material with ease, except for other particle blades. This option can be purchased multiple times.",
      ],
      cost: 15,
      requirement: [],
      cardType: "multi",
      droneOption: false,
    },
    {
      title: "Spatial Folder",
      description: [
        "A spatial folder is a device that is able to fold space and create impossibly big storage spaces inside your gynoid. This allows your gynoid to have much larger weapons hidden inside her body. For example instead of being equipped with a small ballistic firearm, she can be equipped with siege engine minigun. If your gynoid has the Transformer option, she will be able to transform into a large vehicle instead of a small one, like a tank or a jet fighter.",
      ],
      cost: 15,
      requirement: [],
      cardType: "single",
      droneOption: false,
    },
    {
      title: "Phase Shift Module",
      description: [
        "A phase shift module allows your gynoid to enter a mode were she is able to pass through any solid matter by vibrating her atomic particles through the spaces between the atoms of objects. With this ability she will be able to walk through walls and allow bullets to harmlessly pass through her body. While this feature is able to completely nullify attacks made by solid weapons, it offers little protection to energy or heat based weapons.",
      ],
      cost: 20,
      requirement: [],
      cardType: "single",
      droneOption: false,
    },
    {
      title: "Custom Drone",
      description: [
        "Your gynoid will come with a drone, which she is able to control. Alternatively the drone can be controlled by another Al if your gynoid possesses multiple Al. By default the drone don't have any weapons, but you may purchase as many Assassination Assortment options to it as you want. The drone can look however you want, but generally the more points you spend on it, the larger the drone will be. This option can be purchased multiple times.",
      ],
      cost: 10,
      requirement: [],
      cardType: "multi",
      droneOption: true,
    },
  ],
};

export default assassination_assortment;
