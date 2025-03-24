(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);


var products = {}; // Global variable to store JSON data


//Load JSON file
function loadJSON() {
    // fetch("/specification.json") // Replace with the actual file path
    //     .then(response => response.json())
    //     .then(data => {
    //         products = data; // Store the data
    //         console.log("Loaded JSON:", products);
    //         attachEventListeners(); // Attach event listeners after data loads
    //     })
    //     .catch(error => console.error("Error loading JSON:", error));
    products = {
      "allmatic":{
          "moveo":{   
              "id":"moveo",
              "name": "Allmatic MOVEO (230V)",
              "name_list":["Allmatic MOVEO (230V)"],
              "description": [
                "Pleasing designs with powerful drive",
                "All moving shafts are mounted on bearings and modular assembly",
                "Maximum safety and compliance with current regulations regarding impact forces",
                "Comes with integrated control unit",
                "Automatic learning of strokes for an easy, fast and safe installation",
                "Magnetic limit switch available"
              ],
              "images": [
                "img/allmatic_moveo.png",
                "img/moveo_cu.png",
                "img/moveo_card.png"
              ],
              "technical_features": {
                "Power Supply": ["230Vac 50Hz"],
                "Motor Absorption (A)": [1.3],
                "Maximum Gate Weight (kg)": [600],
                "Capacitor (μF)": [12.5],
                "Speed (m/min)": [12],
                "Maximum Thrust (N)": [500],
                "Guaranteed Consecutive Cycles (n°)": [200]
              },
              "dimension_images": [
                "img/moveo_dim1.png",
                "img/moveo_dim2.png",
                "img/moveo_dim3.png"
              ],
              "additional_accessories": [
                "Pair of Photocell FT ALL7",
                "Flashing Light With Support and Antenna",
                "Key switch"
              ]
            },
            "kalos_xl":{
              "id":"kalos_xl",
              "name": "Allmatic KALOS XL",
              "name_list":["KALOS XL 230V 800KG","KALOS XL 230V 1200KG","KALOS XL 120V 1000KG"],
              "description": [
                "Pleasing designs with powerful drive",
                "All moving shafts are mounted on bearings and modular assembly",
                "Maximum safety and compliance with current regulations regarding impact forces",
                "Comes with integrated control unit",
                "Automatic learning of strokes for an easy, fast and safe installation",
                "Magnetic limit switch available",
                "Using this design is the best for a maximum capacity of 1200kg"
              ],
              "images": [
                "img/kalos_xl.png",
                "img/kalos_xl_cu.png"
              ],
              "technical_features": {
                "Power Supply": ["230Vac 50Hz", "230Vac 50Hz", "120Vac 50Hz"],
                  "Motor Absorption (A)": [1.3, 2, 3],
                  "Maximum Gate Weight (kg)": [800, 1200, 1000],
                  "Capacitor (μF)": [10, 12.5, 50],
                  "Speed (m/min)": [10, 10, 11],
                  "Maximum Thrust (N)": [700, 800, 750],
                  "Service (%)": [30, 30, 30],
                  "Recommended Daily Cycles": [200, 200, 200],
                  "Guaranteed Consecutive Cycles": [10, 10, 10],
                  "Protection Class": [44, 44, 44],
                  "Control Unit": ["BIOS1", "BIOS1", "BIOS1"]
              },
              "additional_accessories": [
                "Pair of Photocell FT ALL7",
                "Flashing Light With Support and Antenna",
                "Key switch"
              ],
              "dimension_images": [
                "img/kalos_xl_dim1.png",
                "img/kalos_xl_dim2.png"
              ]
            },
            "kalos_xl_power":{
              "id":"kalos_xl_power",
              "name": "Allmatic KALOS XL Power - 1500KG",
              "name_list":["Allmatic KALOS XL Power - 1500KG"],
              "description": [
                "Pleasing designs with powerful drive",
                "All moving shafts are mounted on bearings and modular assembly",
                "Maximum safety and compliance with current regulations regarding impact forces",
                "Comes with integrated control unit",
                "Automatic learning of strokes for an easy, fast, and safe installation",
                "Magnetic limit switch available",
                "Designed for a maximum gate capacity of 1500kg"
              ],
              "images": [
                "img/xl_power.png",
                "img/xl_power_pinion.png",
                "img/xl_power_bios.png"
              ],
              "technical_features": {
                "Power Supply": ["230Vac 50Hz"],
                "Motor Power Supply": ["24VDc"],
                "Motor Absorption (A)": ["8"],
                "Maximum Gate Weight (Kg)": ["1500"],
                "Speed (m/min)": ["10 - 12"],
                "Maximum Thrust (N)": ["900"],
                "Service": ["100%"],
                "Recommended Daily Cycles (n)": ["400"],
                "Guaranteed Consecutive Cycles (n°)": ["50"],
                "Protection Class (IP)": ["44"],
                "Control Unit": ["BIOS1 24 POWER"]
              },
              "additional_accessories": [
                "Pair of Photocell FT ALL7",
                "Flashing Light With Support and Antenna",
                "Key switch"
              ],
              "dimension_images": [
                "img/xl_power_dim1.png",
                "img/xl_power_dim2.png"
              ]
            },
            "traktor":{
              "id":"traktor",
              "name": "Allmatic TRAKTOR - 2200KG",
              "name_list":["Allmatic TRAKTOR - 2200KG"],
              "description": [
                "Traktor is the solution for heavy gates that require smooth and efficient operation.",
                "Maximum safety and compliance with current regulations regarding impact forces.",
                "Comes with integrated control unit.",
                "The high-quality components and the integrated ventilation system allow a semi-intensive use, even in industrial contexts.",
                "Magnetic limit switch available.",
                "Using this design is the best for a maximum capacity of 2200kg."
              ],
              "images": [
                "img/traktor.png",
                "img/traktor_bios.png",
                "img/traktor_cu.png"
              ],
              "technical_features": {
                "Power Supply": ["230 Vac ± 10%"],
                "Frequency": ["50/60 Hz"],
                "Motor Absorption": ["2 A"],
                "Maximum Gate Weight": ["2200 Kg"],
                "Speed": ["16 m/min"],
                "Maximum Thrust": ["4700 N"],
                "Service": ["80%"],
                "Recommended Daily Cycles": ["400"],
                "Max. Continuous Duration": ["8' min"],
                "Protection Class": ["IP44"],
                "Tested on Cycles": ["80"],
                "Control Unit": ["CT Inverter TRAKTOR"]
              },
              "additional_accessories": [
                "Pair of Photocell FT ALL7",
                "Flashing Light With Support and Antenna",
                "Remote"
              ],
              "dimension_images": [
                "img/traktor_dim1.png"
              ]
            },
            "i2500":{
              "id":"i2500",
              "name": "Allmatic I2500",
              "name_list":["Allmatic I2500"],
              "description": [
                "Ventilated motor with oil bath, built for intensive and industrial heavy gates",
                "With self-ventilation system, I2500 has metal mechanical components and an innovative cooling system that allows the use in critical locations, always keeping a smooth and precise movement in every condition.",
                "Revolutionary integrated limit switch system with high precision adjustment.",
                "Using this design is the best for a maximum capacity of 2500kg"
              ],
              "images": [
                "img/I2500.png",
                "img/I2500_gear.png",
                "img/I2500_switch.png"
              ],
              "technical_features": {
                "Power Supply": ["230Vac 50Hz"],
                "Motor Absorption": ["4 A"],
                "Maximum Gate Weight": ["2500 Kg"],
                "Speed": ["10 m/min"],
                "Maximum Thrust": ["1300 N"],
                "Service": ["80%"],
                "Recommended Daily Cycles": ["500"],
                "Max Continuous Duration": ["8' min"],
                "Protection Class": ["IP44"],
                "Guaranteed Consecutive Cycles": ["15"],
                "Control Unit": ["CT INVERTER"]
              },
              "additional_accessories": [
                "Pair of Photocell FT ALL7",
                "Flashing Light With Support and Antenna",
                "Remote"
              ],
              "dimension_images": [
                "img/I2500_dimensions.png"
              ]
            },
            "ind4000":{
              "id":"ind4000",
              "name": "Allmatic IND4000",
              "name_list":["Allmatic IND4000"],
              "description": [
                "IND4000 has metal and bronze mechanical components and an advanced system for maximal cooling efficiency",
                "It ensures an optimal use even in the most critical situations, always keeping a smooth and precise movement, also thanks to the revolutionary integrated electronic control system.",
                "Available in three-phase version",
                "Using this design is the best for a maximum capacity of 4000kg"
              ],
              "images": [
                "img/IND4000.png",
                "img/IND4000_motor.png",
                "img/IND4000_dim.png"
              ],
              "technical_features": {
                "Power Supply": ["230 Vac 50Hz"],
                "Motor Absorption": ["2.5 A"],
                "Maximum Gate Weight": ["4000 Kg"],
                "Maximum Thrust": ["3700 N"],
                "Service": ["80%"],
                "Recommended Daily Cycles": ["200"],
                "Protection Class": ["IP54"],
                "Control Unit": ["CT INVERTER"]
              }
            },
            "kineo":{
              "id":"kineo",
              "name": "Allmatic KINEO 400",
              "name_list":["Allmatic KINEO 400"],
              "description": [
                "The Kineo 400 Swing gate operator comes with wings of max. 3m and a maximum lifting capacity of 250kgs.",
                "The all-metal gears and the linearity of its form make this motor the best combination of aesthetics and technology.",
                "Cutting-edge metal technology, resistant and high-performing, combined with integrated electronics compatible with BIOS series control units.",
                "Unprecedented number of functionalities.",
                "Available in different versions, depending on requirements, also for 24Vdc intensive use.",
                "Advanced, reliable, and compact BIOS card."
              ],
              "images": [
                "img/kineo.png",
                "img/kineo_dim.png",
                "img/kineo_cu.png"
              ],
              "technical_features": {
                "Power Supply": ["230 Vac 50Hz"],
                "Motor Absorption": ["1 A"],
                "Maximum Gate Weight": ["250 Kg"],
                "Maximum Thrust": ["2000 N"],
                "Capacitor": ["12.5 μF"],
                "Service": ["50%"],
                "Recommended Daily Cycles": ["100"],
                "Protection Class": ["IP55"],
                "Control Unit": ["BIOS2"]
              }
            },
            "xtilus":{
              "id":"xtilus",
              "name": "Allmatic XTILUS",
              "name_list":["Allmatic XTILUS"],
              "description": [
                "Solid and refined mechanical technology.",
                "Structure made of two aluminum shells make it extremely resistant.",
                "Internal moving components entirely made of steel, metal and bronze.",
                "Acceleration and deacceleration can be adjusted at the beginning and at end of every movement.",
                "Simplified installation thanks to the technology of BIOS electronics.",
                "Automatic programming of working time and total control of safety devices.",
                "Endless screw at five principles."
              ],
              "images": [
                "img/xtilus.png",
                "img/xtilus_cu.png"
              ],
              "technical_features": {
                "Power Supply": ["230 Vac 50Hz"],
                "Motor Absorption": ["1 A"],
                "Maximum Gate Weight": ["400 Kg"],
                "Maximum Thrust": ["1600 N"],
                "Capacitor": ["8 μF"],
                "Service": ["50%"],
                "Recommended Daily Cycles": ["150"],
                "Protection Class": ["IP44"],
                "Control Unit": ["BIOS2"]
              },
              "additional_accessories": [
                "Control Unit Box",
                "Pair of Photocell FT ALL7",
                "Flashing Light"
              ],
              "dimension_images":[
                  "img/xtilus_dim1.png"
              ]
            },
            "plus":{
              "id":"plus",
              "name": "Allmatic Plus L",
              "name_list":["Allmatic Plus L"],
              "description": [
                "Structure made entirely of die cast Aluminum",
                "Resistant mechanics designed to ensure ultimate durability and high level performances.",
                "4-end worm-screw and double helical shock-resistant gear lubricated with special synthetic grease.",
                "The installation is made easier and faster by using BIOS electronics.",
                "Automatic programming of working time and total control of safety devices."
              ],
              "images": [
                "img/plus_l.png",
                "img/plus_l_cu.png"
              ],
              "technical_features": {
                "Power Supply": ["230 Vac 50Hz"],
                "Motor Absorption": ["1.1 A"],
                "Maximum Gate Weight": ["500 Kg"],
                "Capacitor": ["6.3 μF"],
                "Service": ["60%"],
                "Recommended Daily Cycles": ["150"],
                "Protection Class": ["IP44"],
                "Control Unit": ["BIOS2"]
              },
              "additional_accessories": [
                "Control Unit Box",
                "Pair of Photocell FT ALL7",
                "Flashing Light"
              ],
              "dimension_images":[
                  "img/plus_l_dim1.png"
              ]
            },
            "maxiart":{
              "id":"maxiart",
              "name": "Allmatic MAXIART K",
              "name_list":["Allmatic MAXIART K"],
              "description": ["Irreversible electromechanical gearmotor with articulated arm, exterior installation.",
              "MAXIART is designed with mechanical components entirely made of metal to ensure the integrity of the product over the years.",
                "Galvanized steel shell designed for maximum ease of installation and minimum space requirement.",
                "BIOS2: Used for total control of Automation.",
                "Several features to best manage the MAXIART range, maximizing the performances of your installation."
              ],
              "images": [
                "img/maxiartk.png"
              ],
              "technical_features": {
                "Power Supply": ["230 Vac 50Hz"],
                "Motor Absorption": ["1.5 A"],
                "Maximum Gate Weight": ["800 Kg"],
                "Capacitor": ["10 μF"],
                "Maximum Gate Length": ["3.5 m"],
                "Service": ["50%"],
                "Recommended Daily Cycles": ["150"],
                "Protection Class": ["IP443"],
                "Control Unit": ["BIOS2"]
              },
              "dimension_images":[
                  "img/maxiartk_dim1.png",
                  "img/maxiartk_dim2.png",
                  "img/maxiartk_dim3.png"
              ]
            },
            "intrxl":{
              "id":"intrxl",
              "name": "Allmatic INT-R/XL - INT VS",
              "name_list":["Allmatic INT-R/XL - INT VS"],
              "description": [
                "QUALITY, ROBUSTNESS AND TECHNOLOGY WITHOUT COMPROMISE.",
                "Operators for underground installation designed and built to last even under extreme conditions.",
                "Steel foundation box (CAC20), ideal for use under extreme conditions, highly resistant to corrosion thanks to a special varnishing treatment with double protective coating.",
                "HIGH QUALITY GEARMOTOR.",
                "DIE CAST ALUMINIUM STRUCTURE DESIGNED FOR EXTREME CONDITIONS."
              ],
              "images": [
                "img/rxl.png",
                "img/rxl2.png"
              ],
              "technical_features": {
                "Power Supply": ["230 Vac 50Hz"],
                "Motor Absorption": ["1.5 A"],
                "Maximum Gate Weight": ["800 Kg"],
                "Capacitor":["10 μF"],
                "Maximum Gate Length": ["4 m"],
                "Service": ["30%"],
                "Recommended Daily Cycles": ["60"],
                "Protection Class": ["IP443"],
                "Control Unit": ["BIOS2"]
              }
            }
          },
      "ja":{
          "ja600":{
              "id":"ja600",
              "name": "JA SL 600KG AC",
              "name_list":["JA SL 600KG AC"],
              "description": [
                "AC motor with built-in control",
                "Keypad/single button interface",
                "Alarm, photobeam, and safety beam interface",
                "Optional auto close function",
                "Soft start and slow stop function",
                "Auto-reverse function when hitting obstacle during gate closing",
                "Manual key release design for emergency purposes"
              ],
              "technical_features": {
                "Torque": ["16 N.m"],
                "Motor Power": ["280 W"],
                "Gate Moving Speed": ["13 min"],
                "Rated Voltage Frequency": ["220V/50Hz"],
                "Working Temperature": ["-20 to 70 °C"],
                "Continuous Working Time": ["15 min"],
                "Maximum Lifting Power": ["600 Kg/f"],
                "Limit Switch": ["Magnetic"]
              },
              "images":[
                  "img/ja_sl600.png"
              ],
              "dimension_images":[
                  "img/ja_sl600_dim1.png",
                  "img/ja_sl600_dim2.png"
              ]
            },
            "ja1000":{
              "id":"ja1000",
              "name": "JA SL 1000KG, 1500KG, AND 2000KG AC",
              "name_list":["SL 1000AC","SL 1500AC","SL 2000AC"],
              "description": [
                "AC motor with built-in control",
                "Keypad/single button interface",
                "Alarm, photobeam, and safety beam interface",
                "Optional auto close function",
                "Soft start and slow stop function",
                "Auto-reverse function when hitting obstacle during gate closing",
                "Manual key release design for emergency purposes"
              ],
              "technical_features": {
                  "Motor Power": ["400 W", "550 W", "750 W"],
                  "Gate Moving Speed": ["11-13 min", "11-13 min", "11-13 min"],
                  "Rated Voltage Frequency": ["220V/50Hz", "220V/50Hz", "220V/50Hz"],
                  "Working Temperature": ["-20 to 70 °C", "-20 to 70 °C", "-20 to 70 °C"],
                  "Output Shaft Height": ["50 mm", "50 mm", "50 mm"],
                  "Maximum Lifting Power": ["1000 Kg/f", "1500 Kg/f", "2000 Kg/f"],
                  "Limit Switch": ["Magnetic", "Magnetic", "Magnetic"]
              },
              "images":[
                  "img/ja_sl1000.png"
              ],
              "dimension_images":[
                  "img/ja_sl1000_dim1.png",
                  "img/ja_sl1000_dim2.png"
              ]
            },
            "ja3000":{
              "id":"ja3000",
              "name": "JA SL 3000KG, 3500KG, AND 5000KG AC",
              "name_list":["SL 3000KG", "SL 3500KG", "SL 5000KG"],
              "description": [
                "Large starting torque, less heating, and used for long-time operation.",
                "Special frequency conversion technology used for smooth operation and excellent deceleration effect.",
                "Suitable for automation of heavy gates",
                "Extra large capacitor for continuous power",
                "Mechanical limit switch used for accurate limit positioning.",
                "Clear display of functions on the motor"
              ],
              "technical_features": {
                  "Rated Power": ["1200 W", "1500 W", "2000 W"],
                  "Gate Moving Speed": ["13-24 min", "13-24 min", "13-24 min"],
                  "Rated Voltage Frequency": ["120/220V-240V AC", "120/220V-240V AC", "120/220V-240V AC"],
                  "Working Temperature": ["-45 to 65 °C", "-45 to 65 °C", "-45 to 65 °C"],
                  "Torque": ["75 Nm", "90 Nm", "120 Nm"],
                  "Maximum Lifting Power": ["3000 Kg/f", "3500 Kg/f", "5000 Kg/f"],
                  "Limit Switch": ["Mechanical", "Mechanical", "Mechanical"]
              },
              "images":[
                  "img/ja_sl3000.png",
                  "img/ja_sl3000_cu.png"
              ],
              "dimension_images":[
                  "img/ja_sl3000_dim1.png",
                  "img/ja_sl3000_dim2.png",
                  "img/ja_sl3000_dim3.png"
              ]
            },
            "ja300dc":{
              "id":"ja300dc",
              "name": "JA 300DC - SWING GATE MOTOR",
              "name_list":["JA 300DC - SWING GATE MOTOR"],
              "description": [
                "DC Motor, Support Backup Battery",
                "No limit switch, stop in obstacle, needs gate block",
                "Automatic closing function with adjustable time",
                "Alarm lamp, photo beam and safety beam interface",
                "Soft start and slow stop function",
                "Manual key release design for emergency purposes"
              ],
              "technical_features": {
                "Motor Power": ["DC24/50W"],
                "Gate Moving Speed": ["2.5 cm/min"],
                "Rated Voltage Frequency": ["220V/50Hz"],
                "Working Temperature": ["-20 to 70 °C"],
                "Maximum Single Leaf Length": ["3.0 m"],
                "Maximum Lifting Power": ["300 Kg/leaf"],
                "Limit Switch": ["Electromechanical"]
              },
              "images":[
                  "img/ja_300.png"
              ],
              "dimension_images":[
                  "img/ja_300_dim1.png"
              ]
            },
            "ja350dc":{
              "id":"ja350dc",
              "name": "JA 350DC - SWING GATE MOTOR",
              "name_list":["JA 350DC - SWING GATE MOTOR"],
              "description": [
                "DC Motor, Support Backup Battery",
                "No limit switch, stop in obstacle, needs gate block",
                "Automatic closing function with adjustable time",
                "Alarm lamp, photo beam and safety beam interface",
                "Soft start and slow stop function",
                "Manual key release design for emergency purposes"
              ],
              "technical_features": {
                "Motor Power": ["DC24/80W"],
                "Gate Moving Speed": ["20 sec per 90° angle (approx)"],
                "Rated Voltage Frequency": ["AC 220V/50Hz"],
                "Working Temperature": ["-20 to 70 °C"],
                "Maximum Single Leaf Length": ["3.0 m"],
                "Maximum Lifting Power": ["350 Kg/leaf"],
                "Limit Switch": ["Electromechanical"]
              },
              "images":[
                  "img/ja_350.png"
              ],
              "dimension_images":[
                  "img/ja_350_dim1.png"
              ]
            },
            "ja400ac":{
              "id":"ja400ac",
              "name": "JA 400AC - SWING GATE MOTOR",
              "name_list":["JA 400AC - SWING GATE MOTOR"],
              "description": [
                "AC motor with built-in control",
                "Keypad/single button interface",
                "Alarm, photobeam, and safety beam interface",
                "Optional auto close function",
                "Soft start and slow stop function",
                "Auto-reverse function when hitting obstacle during gate closing",
                "Manual key release design for emergency purposes"
              ],
              "technical_features": {
                "Motor Power": ["260 W"],
                "Gate Moving Speed": ["9-11 degrees angle/sec"],
                "Rated Voltage Frequency": ["AC 220V/50Hz"],
                "Working Temperature": ["-20 to 70 °C"],
                "Maximum Single Leaf Length": ["3.0 m"],
                "Maximum Lifting Power": ["400 Kg/leaf"],
                "Limit Switch": ["Mechanical"]
              },
              "images":[
                  "img/ja_400.png"
              ],
              "dimension_images":[
                  "img/ja_400_dim1.png",
                  "img/ja_400_dim2.png"
              ]
            }
          },
      "jl":{
          "jlbg800":{
              "id":"jlbg800",
              "name": "JIELONG BG800",
              "name_list":["JIELONG BG800"],
              "description": [
                "The high capacity Jielong sliding gate motor is optimal for use up to 800kg.",
                "It comes with a Smart Main Board that runs for a long time and ensures optimal functioning.",
                "Comes with a pure copper coil that makes the motor highly efficient and durable.",
                "It has a compact structure for saving space and delivering a neat look.",
                "Durable gear assembly.",
                "It has a DC supply for long-term use."
              ],
              "technical_features": {
                "Capacity": ["800 Kg"],
                "Rated Power": ["110 W"],
                "Motor Speed": ["1500 rpm"],
                "Gate Speed": ["12 m/min"],
                "Output Voltage": ["DC 24V"],
                "Temperature": ["-30°C to 65°C"],
                "Protection Class": ["IP 65"],
                "Control Unit": ["BH 900"]
              },
              "images":[
                  "img/jlbg_800.png",
                  "img/jlbg_800_cu.png"
              ],
              "dimension_images":[
                  "img/jlbg_800_dim1.png"
              ]
            },
            "jlbg1000":{
              "id":"jlbg1000",
              "name": "JIELONG BG1000, BG1500, BG2000, BG2500",
              "name_list":["BG1000", "BG1500", "BG2000", "BG2500"],
              "description": [
                "The high capacity Jielong sliding gate motor is optimal for use up to 1000kg, 1500kg, 2000kg, and 2500kg.",
                "It comes with a Smart Main Board that runs for a long time and ensures optimal functioning.",
                "Comes with a pure copper coil that makes the motor highly efficient and durable.",
                "It has a compact structure for saving space and delivering a neat look.",
                "Durable gear assembly.",
                "It has a DC supply for long-term use."
              ],
              "technical_features": {
                  "Capacity": ["1000 Kg", "1500 Kg", "2000 Kg", "2500 Kg"],
                  "Rated Power": ["110 W", "180 W", "280 W", "280 W"],
                  "Motor Speed": ["1500 rpm", "1500 rpm", "1500 rpm", "1500 rpm"],
                  "Gate Speed": ["12 m/min", "12 m/min", "12 m/min", "12 m/min"],
                  "Output Voltage": ["DC 24V", "DC 24V", "DC 24V", "DC 24V"],
                  "Temperature": ["-30°C to 65°C", "-30°C to 65°C", "-30°C to 65°C", "-30°C to 65°C"],
                  "Protection Class": ["IP 65", "IP 65", "IP 65", "IP 65"],
                  "Control Unit": ["JL SD 24E", "JL SD 24E", "JL SD 24E", "JL SD 24E"]
              },
              "images":[
                  "img/jlbg_1000.png",
                  "img/jlbg_1000_cu.png"
              ],
              "dimension_images":[
                  "img/jlbg_1000_dim1.png"
              ]
            },
            "jlsd3500":{
              "id":"jlsd3500",
              "name": "JIELONG SD3500",
              "name_list":["JIELONG SD3500"],
              "description": [
                "The high capacity Jielong sliding gate motor is optimal for use of up to 3500kg capacity.",
                "It comes with a Smart Main Board that runs for a long time and ensures optimal functioning.",
                "Comes with a pure copper coil that makes the motor highly efficient and durable.",
                "It has a compact structure for saving space and delivering a neat look.",
                "It has a DC supply for long-term use."
              ],
              "technical_features": {
                "Torque": ["80 N.m"],
                "Rated Power": ["450 W"],
                "Motor Speed": ["1600 rpm"],
                "Gate Speed": ["15 m/min"],
                "Output Voltage": ["DC 36V"],
                "Temperature": ["-30°C to 65°C"],
                "Protection Class": ["IP 65"],
                "Limit Switch": ["Spring/Magnetic"],
                "Control Unit": ["JL SD 5T"]
              },
              "images":[
                  "img/jlsd_3500.png",
                  "img/jlsd_3500_cu.png"
              ],
              "dimension_images":[
                  "img/jlsd_3500_dim1.png",
                  "img/jlsd_3500_dim2.png",
                  "img/jlsd_3500_dim3.png"
              ]
            },
            "jlbg4500":{
              "id":"jlbg4500",
              "name": "JIELONG BG4500",
              "name_list":["JIELONG BG4500"],
              "description": [
                "The high capacity Jielong sliding gate motor is optimal for use of up to 4500kg capacity.",
                "It comes with a Smart Main Board that runs for a long time and ensures optimal functioning.",
                "Comes with a pure copper coil that makes the motor highly efficient and durable.",
                "It has a compact structure for saving space and delivering a neat look.",
                "It has a DC supply for long-term use."
              ],
              "technical_features": {
                "Torque": ["97 N.m"],
                "Rated Power": ["550 W"],
                "Motor Speed": ["1700 rpm"],
                "Gate Speed": ["15 m/min"],
                "Output Voltage": ["DC 36V"],
                "Temperature": ["-30°C to 65°C"],
                "Protection Class": ["IP 65"],
                "Limit Switch": ["Spring"]
              },
              "images":[
                  "img/jlbg_4500.png",
                  "img/jlbg_4500_cu.png",
                  "img/jlbg_4500_motor.png"
              ],
              "dimension_images":[
                  "img/jlbg_4500_dim1.png"
              ]
            },
            "jlbg6500":{
              "id":"jlbg6500",
              "name": "JIELONG BG6500",
              "name_list":["JIELONG BG6500"],
              "description": [
                "The high capacity Jielong sliding gate motor is optimal for use of up to 6500kg capacity.",
                "It comes with a Smart Main Board that runs for a long time and ensures optimal functioning.",
                "Comes with a pure copper coil that makes the motor highly efficient and durable.",
                "It has a compact structure for saving space and delivering a neat look.",
                "It has a DC supply for long-term use."
              ],
              "technical_features": {
                "Torque": ["144 N.m"],
                "Rated Power": ["750 W"],
                "Motor Speed": ["2400 rpm"],
                "Gate Speed": ["15 m/min"],
                "Output Voltage": ["DC 36V"],
                "Temperature": ["-30°C to 65°C"],
                "Protection Class": ["IP 65"],
                "Limit Switch": ["Spring"]
              },
              "images":[
                  "img/jlbg_6500.png",
                  "img/jlbg_6500_cu.png",
                  "img/jlbg_6500_gear.png"
              ],
              "dimension_images":[
                  "img/jlbg_6500_dim1.png"
              ]
            },
            "jlecr225":{
              "id":"jlecr225",
              "name": "Jielong ECR 225 - 400KG",
              "name_list":["Jielong ECR 225 - 400KG"],
              "description": [
                "Can be used for rolling shutters up to the capacity of 400kg",
                "Pleasing designs with powerful drive",
                "Safety brake, accurate limited control positioning, with double limit switch protection",
                "Can prevent door over roll up",
                "Powerful, low noise and low-energy consumption",
                "Easy to install and maintain for a long and peaceful motor life"
              ],
              "technical_features": {
                "Torque": ["225 N.m"],
                "Motor Power": ["180 W"],
                "Motor Speed": ["4.2 rpm"],
                "Rated Voltage Frequency": ["220V/50Hz"],
                "Rated Current": ["1.8 A"],
                "Continuous Working Time": ["7 min"],
                "Maximum Lifting Power": ["400 Kg/f"],
                "Dimensions": ["6 X 7 mm"]
              },
              "images":[
                  "img/jlecr_225.png",
                  "img/jlecr_225_acc.png"
              ]
            },
            "jlecr412":{
              "id":"jlecr412",
              "name": "Jielong ECR 412 - 600KG",
              "name_list":["Jielong ECR 412 - 600KG"],
              "description": [
                "Can be used for rolling shutters up to the capacity of 600kg",
                "Pleasing designs with powerful drive",
                "Safety brake, accurate limited control positioning, with double limit switch protection",
                "Can prevent door over roll up",
                "Powerful, low noise and low-energy consumption",
                "Easy to install and maintain for a long and peaceful motor life"
              ],
              "technical_features": {
                "Torque": ["412 N.m"],
                "Motor Power": ["370 W"],
                "Motor Speed": ["4.8 rpm"],
                "Rated Voltage Frequency": ["220V/50Hz"],
                "Rated Current": ["3.3 A"],
                "Continuous Working Time": ["7 min"],
                "Maximum Lifting Power": ["600 Kg/f"],
                "Dimensions": ["6 X 7 mm"]
              },
              "images":[
                  "img/jlecr_412.png",
                  "img/jlecr_412_acc.png"
              ]
            },
            "jlecr647":{
              "id":"jlecr647",
              "name": "Jielong ECR 647 - 800KG",
              "name_list":["Jielong ECR 647 - 800KG"],
              "description": [
                "Can be used for rolling shutters up to the capacity of 800kg",
                "Pleasing designs with powerful drive",
                "Safety brake, accurate limited control positioning, with double limit switch protection",
                "Can prevent door over roll up",
                "Powerful, low noise and low-energy consumption",
                "Easy to install and maintain for a long and peaceful motor life"
              ],
              "technical_features": {
                "Torque": ["647 N.m"],
                "Motor Power": ["400 W"],
                "Motor Speed": ["4.0 rpm"],
                "Rated Voltage Frequency": ["220V/50Hz"],
                "Rated Current": ["4.7 A"],
                "Continuous Working Time": ["7 min"],
                "Maximum Lifting Power": ["800 Kg/f"],
                "Dimensions": ["7 X 7 mm"]
              },
              "images":[
                  "img/jlecr_647.png",
                  "img/jlecr_647_acc.png"
              ]
            },
            "jlecr809":{
              "id":"jlecr809",
              "name": "Jielong ECR 809 - 1000KG",
              "name_list":["1PH", "3PH"],
              "description": [
                "Can be used for rolling shutters up to the capacity of 1000kg",
                "Available in single-phase and three-phase models",
                "Pleasing designs with powerful drive",
                "Safety brake, accurate limited control positioning, with double limit switch protection",
                "Can prevent door over roll up",
                "Powerful, low noise and low-energy consumption",
                "Easy to install and maintain for a long and peaceful motor life"
              ],
              "technical_features": {
                  "Torque": ["809 N.m", "809 N.m"],
                  "Motor Power": ["400 W", "370 W"],
                  "Motor Speed": ["3.5 rpm", "3.5 rpm"],
                  "Rated Voltage Frequency": ["220V/50Hz", "380V/50Hz"],
                  "Rated Current": ["4.9 A", "2.8 A"],
                  "Continuous Working Time": ["7 min", "15 min"],
                  "Maximum Lifting Power": ["1000 Kg/f", "1000 Kg/f"],
                  "Dimensions": ["6 X 7 mm", "6 X 7 mm"]
              },
              "images":[
                  "img/jlecr_809.png",
                  "img/jlecr_809_acc.png"
              ]
            }
          }
  };

  console.log(Object.keys(products));

  attachEventListeners();
}

// Function to attach event listeners dynamically
function attachEventListeners() {
    document.querySelectorAll(".btn-info").forEach(button => {
        button.addEventListener("click", function () {
            showProduct(this.id); // Pass the clicked button's ID
        });
    });
}

// attachEventListeners();

        // // Function to show product details
        // function showProduct(productId) {
        //     const product = productsData[productId]; // Get product by ID
        //     if (!product) {
        //         console.error("Product not found:", productId);
        //         return;
        //     }

        //     alert(`Product Name: ${product.name}`); // Example: Show alert with product name
        // }

        // Load JSON when the page loads
        

//Information display
function showProduct(tag,productId) {
    const subproduct = products[tag];
    console.log(Object.keys(subproduct));
    const product = subproduct[productId];
    console.log(tag,productId);
    if (!product){
        console.log("No product")
        return;
    }

    // document.getElementById("productTitle").textContent = product.name;
    // document.getElementById("productDescription").innerHTML = product.description.map(desc => `<li>${desc}</li>`).join('');
    // document.getElementById("productImages").innerHTML = product.images.map(img => `<img src="${img}" alt="Product Image">`).join('');
    
    // document.getElementById("productTable").innerHTML = `
    //     <tr><th>TECHNICAL FEATURES</th><th>VALUE</th></tr>
    //     ${Object.entries(product.technical_features).map(([key, value]) => `
    //         <tr><td>${key}</td><td>${value}</td></tr>
    //     `).join('')}
    // `;
    
    // document.getElementById("dimensionImages").innerHTML = product.dimension_images.map(img => `<img src="${img}" alt="Dimension Image">`).join('');
    // document.getElementById("accessoriesTable").innerHTML = `
    //     <thead><tr><th>ADDITIONAL ACCESSORIES</th></tr></thead>
    //     <tbody>
    //         ${product.additional_accessories.map(acc => `<tr><td>${acc}</td></tr>`).join('')}
    //     </tbody>
    // `;
    
    // document.getElementById("productDisplay").classList.add("active");

    if (product.name) {
      document.getElementById("productTitle").textContent = product.name;
  }
  
  if (product.description?.length) {
      document.getElementById("productDescription").innerHTML = product.description.map(desc => `<li>${desc}</li>`).join('');
  }
  
  if (product.images?.length) {
      document.getElementById("productImages").innerHTML = product.images.map(img => `<img src="${img}" alt="Product Image">`).join('');
  }
  
  // Render technical features as a table with multiple columns for different product variations
  if (product.technical_features && Object.keys(product.technical_features).length) {
      let featureKeys = Object.keys(product.technical_features);
      let productNames = product.name_list || [];
  
      document.getElementById("productTable").innerHTML = `
          <thead>
              <tr>
                  <th>TECHNICAL FEATURES</th>
                  ${productNames.map(name => `<th>${name}</th>`).join('')}
              </tr>
          </thead>
          <tbody>
              ${featureKeys.map(key => `
                  <tr>
                      <td>${key}</td>
                      ${product.technical_features[key].map(value => `<td>${value}</td>`).join('')}
                  </tr>
              `).join('')}
          </tbody>
      `;
  }
  
  if (product.dimension_images?.length) {
      document.getElementById("dimensionImages").innerHTML = product.dimension_images.map(img => `<img src="${img}" alt="Dimension Image">`).join('');
  }
  
  if (product.additional_accessories?.length) {
      document.getElementById("accessoriesTable").innerHTML = `
          <thead><tr><th>ADDITIONAL ACCESSORIES</th></tr></thead>
          <tbody>
              ${product.additional_accessories.map(acc => `<tr><td>${acc}</td></tr>`).join('')}
          </tbody>
      `;
  }
  
  document.getElementById("productDisplay").classList.add("active");
  
  
}

function closeProduct() {
    document.getElementById("productDisplay").classList.remove("active");
}

// document.addEventListener("click", function (event) {
//     let productDisplay = document.getElementById("productDisplay");
    
//     // Check if productDisplay is active and if the click is outside it
//     if (productDisplay.classList.contains("active") && !productDisplay.contains(event.target)) {
//         closeProduct();
//     }
// });


document.addEventListener("DOMContentLoaded", loadJSON);

