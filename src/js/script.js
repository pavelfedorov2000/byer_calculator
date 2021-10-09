$(document).ready(function () {
    var vat = 1.2;

    var objects = {
        "Жилой комплекс": {
            fire: [ // Пожарная безопасность
                0,
                1200000,
                1500000, 1500000, 1500000, 1500000,
                1700000, 1700000, 1700000, 1700000,
                2000000, 2000000, 2000000, 2000000, 2000000, 2000000,
                2500000, 2500000, 2500000, 2500000, 2500000,
            ],
            network: [ // Инженерные сети, планировочные и конструктивные решения
                0,
                1500000,
                1700000, 1700000, 1700000, 1700000,
                2000000, 2000000, 2000000, 2000000,
                2500000, 2500000, 2500000, 2500000, 2500000, 2500000,
                3000000, 3000000, 3000000, 3000000, 3000000,
            ],
            safety: [ // Промышленная безопасность
                0,
                1500000,
                1700000, 1700000, 1700000, 1700000,
                2000000, 2000000, 2000000, 2000000,
                2500000, 2500000, 2500000, 2500000, 2500000, 2500000,
                3000000, 3000000, 3000000, 3000000, 3000000,
            ],
            other: {
                fire: { // Пожарная безопасность (расчёты отражаемые при выборе СТУ по пожарной безопасности)
                    plan: 450000, // План тушения пожара
                    risk: 250000, // Расчёт пожарного риска
                    mcs: 500000, // Получение заключения на расчёты научной организации МЧС России
                },
                network: { // Инженерные сети, планировочные и конструктивные решения (расчёты отражаемые при выборе СТУ по Инженерные сети, планировочные и конструктивные решения)
                    constructive: 800000, // Конструктивные расчёты
                    transport: 600000, // Расчёт транспортного потока
                    science: 500000, // Получение заключения научной организации на конструктивные расчёты
                },
                safety: 0, // Промышленная безопасность (расчёты отражаемые при выборе СТУ по промышленной безопасности)
            },
        },
        "Торгово-развлекательный центр": {
            fire: [ // Пожарная безопасность
                0,
                1400000,
                1700000, 1700000, 1700000, 1700000,
                2100000, 2100000, 2100000, 2100000,
                2400000, 2400000, 2400000, 2400000, 2400000, 2400000,
                2700000, 2700000, 2700000, 2700000, 2700000,
            ],
            network: [ // Инженерные сети, планировочные и конструктивные решения
                0,
                1700000,
                2000000, 2000000, 2000000, 2000000,
                2500000, 2500000, 2500000, 2500000,
                3000000, 3000000, 3000000, 3000000, 3000000, 3000000,
                3500000, 3500000, 3500000, 3500000, 3500000,
            ],
            safety: [ // Промышленная безопасность
                0,
                1700000,
                2000000, 2000000, 2000000, 2000000,
                2500000, 2500000, 2500000, 2500000,
                3000000, 3000000, 3000000, 3000000, 3000000, 3000000,
                3500000, 3500000, 3500000, 3500000, 3500000,
            ],
            other: {
                fire: { // Пожарная безопасность (расчёты отражаемые при выборе СТУ по пожарной безопасности)
                    plan: 450000, // План тушения пожара
                    risk: 250000, // Расчёт пожарного риска
                    mcs: 500000, // Получение заключения на расчёты научной организации МЧС России
                },
                network: { // Инженерные сети, планировочные и конструктивные решения (расчёты отражаемые при выборе СТУ по Инженерные сети, планировочные и конструктивные решения)
                    constructive: 800000, // Конструктивные расчёты
                    transport: 600000, // Расчёт транспортного потока
                    science: 500000, // Получение заключения научной организации на конструктивные расчёты
                },
                safety: 0, // Промышленная безопасность (расчёты отражаемые при выборе СТУ по промышленной безопасности)
            },
        },
        "Административное здание": {
            fire: [ // Пожарная безопасность
                0,
                1200000,
                1500000, 1500000, 1500000, 1500000,
                1700000, 1700000, 1700000, 1700000,
                2000000, 2000000, 2000000, 2000000, 2000000, 2000000,
                2500000, 2500000, 2500000, 2500000, 2500000,
            ],
            network: [ // Инженерные сети, планировочные и конструктивные решения
                0,
                1700000,
                2000000, 2000000, 2000000, 2000000,
                2500000, 2500000, 2500000, 2500000,
                3000000, 3000000, 3000000, 3000000, 3000000, 3000000,
                3500000, 3500000, 3500000, 3500000, 3500000,
            ],
            safety: [// Промышленная безопасность
                0,
                1700000,
                2000000, 2000000, 2000000, 2000000,
                2500000, 2500000, 2500000, 2500000,
                3000000, 3000000, 3000000, 3000000, 3000000, 3000000,
                3500000, 3500000, 3500000, 3500000, 3500000,
            ],
            other: {
                fire: { // Пожарная безопасность (расчёты отражаемые при выборе СТУ по пожарной безопасности)
                    plan: 450000, // План тушения пожара
                    risk: 450000, // Расчёт пожарного риска
                    mcs: 500000, // Получение заключения на расчёты научной организации МЧС России
                },
                network: { // Инженерные сети, планировочные и конструктивные решения (расчёты отражаемые при выборе СТУ по Инженерные сети, планировочные и конструктивные решения)
                    constructive: 800000, // Конструктивные расчёты
                    transport: 600000, // Расчёт транспортного потока
                    science: 500000, // Получение заключения научной организации на конструктивные расчёты
                },
                safety: 0, // Промышленная безопасность (расчёты отражаемые при выборе СТУ по промышленной безопасности)
            },
        },
        "Спортивный комплекс": {
            fire: [ // Пожарная безопасность
                0,
                1400000,
                1700000, 1700000, 1700000, 1700000,
                2100000, 2100000, 2100000, 2100000,
                2400000, 2400000, 2400000, 2400000, 2400000, 2400000,
                2700000, 2700000, 2700000, 2700000, 2700000,
            ],
            network: [ // Инженерные сети, планировочные и конструктивные решения
                0,
                1700000,
                2000000, 2000000, 2000000, 2000000,
                2500000, 2500000, 2500000, 2500000,
                3000000, 3000000, 3000000, 3000000, 3000000, 3000000,
                3500000, 3500000, 3500000, 3500000, 3500000,
            ],
            safety: [// Промышленная безопасность
                0,
                1700000,
                2000000, 2000000, 2000000, 2000000,
                2500000, 2500000, 2500000, 2500000,
                3000000, 3000000, 3000000, 3000000, 3000000, 3000000,
                3500000, 3500000, 3500000, 3500000, 3500000,
            ],
            other: {
                fire: { // Пожарная безопасность (расчёты отражаемые при выборе СТУ по пожарной безопасности)
                    plan: 450000, // План тушения пожара
                    risk: 450000, // Расчёт пожарного риска
                    mcs: 500000, // Получение заключения на расчёты научной организации МЧС России
                },
                network: { // Инженерные сети, планировочные и конструктивные решения (расчёты отражаемые при выборе СТУ по Инженерные сети, планировочные и конструктивные решения)
                    constructive: 800000, // Конструктивные расчёты
                    transport: 600000, // Расчёт транспортного потока
                    science: 500000, // Получение заключения научной организации на конструктивные расчёты
                },
                safety: 0, // Промышленная безопасность (расчёты отражаемые при выборе СТУ по промышленной безопасности)
            },
        },
        "Производственный комплекс": {
            fire: [// Пожарная безопасность
                0,
                1200000,
                1500000, 1500000, 1500000, 1500000,
                1700000, 1700000, 1700000, 1700000,
                2000000, 2000000, 2000000, 2000000, 2000000, 2000000,
                2500000, 2500000, 2500000, 2500000, 2500000,
            ],
            network: [// Инженерные сети, планировочные и конструктивные решения
                0,
                1500000,
                1700000, 1700000, 1700000, 1700000,
                2000000, 2000000, 2000000, 2000000,
                2500000, 2500000, 2500000, 2500000, 2500000, 2500000,
                3000000, 3000000, 3000000, 3000000, 3000000,
            ],
            safety: [// Промышленная безопасность
                0,
                1500000,
                1700000, 1700000, 1700000, 1700000,
                2000000, 2000000, 2000000, 2000000,
                2500000, 2500000, 2500000, 2500000, 2500000, 2500000,
                3000000, 3000000, 3000000, 3000000, 3000000,
            ],
            other: {
                fire: {// Пожарная безопасность (расчёты отражаемые при выборе СТУ по пожарной безопасности)
                    plan: 450000, // План тушения пожара
                    risk: 450000, // Расчёт пожарного риска
                    mcs: 500000, // Получение заключения на расчёты научной организации МЧС России
                },
                network: {// Инженерные сети, планировочные и конструктивные решения (расчёты отражаемые при выборе СТУ по Инженерные сети, планировочные и конструктивные решения)
                    constructive: 800000, // Конструктивные расчёты
                    transport: 600000, // Расчёт транспортного потока
                    science: 500000, // Получение заключения научной организации на конструктивные расчёты
                },
                safety: 950000, // Промышленная безопасность (расчёты отражаемые при выборе СТУ по промышленной безопасности)
            },
        },
        "Складской комплекс": {
            fire: [// Пожарная безопасность
                0,
                1200000,
                1500000, 1500000, 1500000, 1500000,
                1700000, 1700000, 1700000, 1700000,
                2000000, 2000000, 2000000, 2000000, 2000000, 2000000,
                2500000, 2500000, 2500000, 2500000, 2500000,
            ],
            network: [// Инженерные сети, планировочные и конструктивные решения
                0,
                1500000,
                1700000, 1700000, 1700000, 1700000,
                2000000, 2000000, 2000000, 2000000,
                2500000, 2500000, 2500000, 2500000, 2500000, 2500000,
                3000000, 3000000, 3000000, 3000000, 3000000,
            ],
            safety: [// Промышленная безопасность
                0,
                1500000,
                1700000, 1700000, 1700000, 1700000,
                2000000, 2000000, 2000000, 2000000,
                2500000, 2500000, 2500000, 2500000, 2500000, 2500000,
                3000000, 3000000, 3000000, 3000000, 3000000,
            ],
            other: {
                fire: {// Пожарная безопасность (расчёты отражаемые при выборе СТУ по пожарной безопасности)
                    plan: 450000, // План тушения пожара
                    risk: 450000, // Расчёт пожарного риска
                    mcs: 500000, // Получение заключения на расчёты научной организации МЧС России
                },
                network: {// Инженерные сети, планировочные и конструктивные решения (расчёты отражаемые при выборе СТУ по Инженерные сети, планировочные и конструктивные решения)
                    constructive: 800000, // Конструктивные расчёты
                    transport: 600000, // Расчёт транспортного потока
                    science: 500000, // Получение заключения научной организации на конструктивные расчёты
                },
                safety: 0, // Промышленная безопасность (расчёты отражаемые при выборе СТУ по промышленной безопасности)
            },
        },
        "Объект транспортной инфраструктуры": {
            fire: [// Пожарная безопасность
                0,
                1200000,
                1500000, 1500000, 1500000, 1500000,
                1700000, 1700000, 1700000, 1700000,
                2000000, 2000000, 2000000, 2000000, 2000000, 2000000,
                2500000, 2500000, 2500000, 2500000, 2500000,
            ],
            network: [// Инженерные сети, планировочные и конструктивные решения
                0,
                1500000,
                1700000, 1700000, 1700000, 1700000,
                2000000, 2000000, 2000000, 2000000,
                2500000, 2500000, 2500000, 2500000, 2500000, 2500000,
                3000000, 3000000, 3000000, 3000000, 3000000,
            ],
            safety: [// Промышленная безопасность
                0,
                1500000,
                1700000, 1700000, 1700000, 1700000,
                2000000, 2000000, 2000000, 2000000,
                2500000, 2500000, 2500000, 2500000, 2500000, 2500000,
                3000000, 3000000, 3000000, 3000000, 3000000,
            ],
            other: {
                fire: {// Пожарная безопасность (расчёты отражаемые при выборе СТУ по пожарной безопасности)
                    plan: 450000, // План тушения пожара
                    risk: 450000, // Расчёт пожарного риска
                    mcs: 500000, // Получение заключения на расчёты научной организации МЧС России
                },
                network: {// Инженерные сети, планировочные и конструктивные решения (расчёты отражаемые при выборе СТУ по Инженерные сети, планировочные и конструктивные решения)
                    constructive: 800000, // Конструктивные расчёты
                    transport: 600000, // Расчёт транспортного потока
                    science: 500000, // Получение заключения научной организации на конструктивные расчёты
                },
                safety: 0, // Промышленная безопасность (расчёты отражаемые при выборе СТУ по промышленной безопасности)
            },
        },
        "Метрополитен": {// Торгово-развлекательный центр
            fire: [// Пожарная безопасность
                0,
                1700000,
                2500000, 2500000, 2500000, 2500000,
                3000000, 3000000, 3000000, 3000000,
                4000000, 4000000, 4000000, 4000000, 4000000, 4000000,
                7000000, 7000000, 7000000, 7000000, 7000000,
            ],
            network: [// Инженерные сети, планировочные и конструктивные решения
                0,
                2000000,
                2500000, 2500000, 2500000, 2500000,
                2700000, 2700000, 2700000, 2700000,
                3000000, 3000000, 3000000, 3000000, 3000000, 3000000,
                3500000, 3500000, 3500000, 3500000, 3500000,
            ],
            safety: [// Промышленная безопасность
                0,
                2000000,
                2500000, 2500000, 2500000, 2500000,
                2700000, 2700000, 2700000, 2700000,
                3000000, 3000000, 3000000, 3000000, 3000000, 3000000,
                3500000, 3500000, 3500000, 3500000, 3500000,
            ],
            other: {
                fire: {// Пожарная безопасность (расчёты отражаемые при выборе СТУ по пожарной безопасности)
                    plan: 750000, // План тушения пожара
                    risk: 750000, // Расчёт пожарного риска
                    mcs: 900000, // Получение заключения на расчёты научной организации МЧС России
                },
                network: {// Инженерные сети, планировочные и конструктивные решения (расчёты отражаемые при выборе СТУ по Инженерные сети, планировочные и конструктивные решения)
                    constructive: 1100000, // Конструктивные расчёты
                    transport: 800000, // Расчёт транспортного потока
                    science: 800000, // Получение заключения научной организации на конструктивные расчёты
                },
                safety: 950000, // Промышленная безопасность (расчёты отражаемые при выборе СТУ по промышленной безопасности)
            },
        },
        "Объект нефте-газовой промышленности": {// Торгово-развлекательный центр
            fire: [// Пожарная безопасность
                0,
                1700000,
                2500000, 2500000, 2500000, 2500000,
                3000000, 3000000, 3000000, 3000000,
                4000000, 4000000, 4000000, 4000000, 4000000, 4000000,
                7000000, 7000000, 7000000, 7000000, 7000000,
            ],
            network: [// Инженерные сети, планировочные и конструктивные решения
                0,
                2000000,
                2500000, 2500000, 2500000, 2500000,
                2700000, 2700000, 2700000, 2700000,
                3000000, 3000000, 3000000, 3000000, 3000000, 3000000,
                3500000, 3500000, 3500000, 3500000, 3500000,
            ],
            safety: [// Промышленная безопасность
                0,
                2000000,
                2500000, 2500000, 2500000, 2500000,
                2700000, 2700000, 2700000, 2700000,
                3000000, 3000000, 3000000, 3000000, 3000000, 3000000,
                3500000, 3500000, 3500000, 3500000, 3500000,
            ],
            other: {
                fire: {// Пожарная безопасность (расчёты отражаемые при выборе СТУ по пожарной безопасности)
                    plan: 750000, // План тушения пожара
                    risk: 750000, // Расчёт пожарного риска
                    mcs: 800000, // Получение заключения на расчёты научной организации МЧС России
                },
                network: {// Инженерные сети, планировочные и конструктивные решения (расчёты отражаемые при выборе СТУ по Инженерные сети, планировочные и конструктивные решения)
                    constructive: false, // Конструктивные расчёты
                    transport: false, // Расчёт транспортного потока
                    science: false, // Получение заключения научной организации на конструктивные расчёты
                },
                safety: 950000, // Промышленная безопасность (расчёты отражаемые при выборе СТУ по промышленной безопасности)
            },
        },
    };

    let stuChecksInputs = document.querySelectorAll('input[name="stu_calcs"]');

    // На Выберите назначение объекта
    $("body").on("change", "#calc_object_purpose", function () {
        var selected_object = $("#calc_object_purpose").find("option:selected").val();
        var selected = $(this).find("option:selected").val();
        console.log(selected);
        if (selected == "Не выбрано") {
            $("#calc_stu").addClass("calculator-form__item--disabled");
        } else {
            $("#calc_stu").removeClass("calculator-form__item--disabled");
        }
        let stuSelect = document.querySelector('#calc_stu_type');
        let selectedStu = stuSelect.selectedIndex;
        console.log(selectedStu);
        if (selectedStu !== 0) {
            add_arr = [];
            add_sum = 0;
            for (let i = 0; i < stuChecksInputs.length; i++) {
                stuChecksInputs[i].checked = false;
            }
        }
    });

    // На Выберите вид СТУ
    $("body").on("change", "#calc_stu_type", function () {
        add_arr = [];
        add_sum = 0;
        var selected_object = $("#calc_object_purpose").find("option:selected").val();
        console.log(add_sum);
        var selected = $(this).find("option:selected").val();
        console.log(selected);
        var selectedIndex = $(this).find("option:selected").index();
        console.log(selectedIndex);
        if (selected == "Не выбрано") {
            $("#calc_deviations").addClass("calculator-form__item--disabled");
            $("#calc_vat").addClass("calculator-form__item--disabled");
            $("#calc_count").addClass("calculator-form__btn--disabled");
            $("#calc_order").addClass("calculator-form__btn--disabled");
        } else {
            $("#calc_deviations").removeClass("calculator-form__item--disabled");
            $("#calc_vat").removeClass("calculator-form__item--disabled");
            $("#calc_count").removeClass("calculator-form__btn--disabled");
            $("#calc_order").removeClass("calculator-form__btn--disabled");
        }
        for (let i = 0; i < stuChecksInputs.length; i++) {
            stuChecksInputs[i].checked = false;
        }

        let stuChecks = document.querySelectorAll('.calculator-form__stu-checks');
        if (selectedIndex !== 0) {
            $('.calculator-form__stu-item').show();
            for (let i = 0; i < stuChecks.length; i++) {
                stuChecks[i].style.display = 'none';
                stuChecks[selectedIndex - 1].style.display = 'block';
            }
        }
    });

    var add_arr = [];
    var add_sum = 0;

    $("body").on("change", "input[name='stu_calcs']", function () {
        var checked = $(this).val();
        console.log(checked);
        var selected_object = $("#calc_object_purpose").find("option:selected").val();
        var selected_stu = $("#calc_stu_type").find("option:selected").val();
        var index = add_arr.indexOf(objects[selected_object]["other"][selected_stu][checked]);
        if ($(this).is(':checked')) {
            if (selected_stu === "safety") {
                add_arr.push(objects[selected_object]["other"][selected_stu]);
                console.log(add_arr);
            } else {
                add_arr.push(objects[selected_object]["other"][selected_stu][checked]);
                console.log(add_arr);
            }
        } else {
            add_arr.splice(index);
            console.log(add_arr);
        }
        if (add_arr.length > 0) {
            add_sum = add_arr.reduce((sum, current) => sum + current);
        } else {
            add_sum = 0;
        }
        console.log(add_sum);
    });


    // Запускаем девиации)
    var minNum = 1;
    var maxNum = 1200000;
    let deviationsVal;
    $("#calc_deviations_numbers").ionRangeSlider({
        step: 1,
        min: minNum,
        max: maxNum,
        onStart: function (data) {
            deviationsVal = data.from;
        },
        onChange: function (data) {
            deviationsVal = data.from;
            console.log(deviationsVal);
        }
    });

    $("body").on("click", "#calc_count", function () {
        calculateSum();
    });


    // считаем что у нас тут набрано
    function calculateSum() {

        var selected_object = $("#calc_object_purpose").find("option:selected").val();
        var selected_stu = $("#calc_stu_type").find("option:selected").val();
        var deviationsVal = $("#calc_deviations_numbers").val();
        var isVat = $('input[name="vat_cost"]:checked').val();
        addVat = 1;
        if (isVat == 1)
        addVat = vat;
        console.log("Выбрано: " + selected_object, selected_stu, deviationsVal);
        var found = objects[selected_object][selected_stu][deviationsVal] + add_sum;
        console.log("found: " + found);

        if (isInt(found)) {
            var total = found * addVat;
            console.log(total);
            $("#calc_cost").html(total + " руб.");
        }
    }
});

function isInt(value) {
    return !isNaN(value) &&
        parseInt(Number(value)) == value &&
        !isNaN(parseInt(value, 10));
}