$(function () {

    $(document).ready(function (e) {
        $.ajax({
            type: "GET",
            url: '/getdrinks'
        }).done(function (data) {
            console.log(data);

            $('.drink1').text(data.drinks[0].name);
            $('.drink2').text(data.drinks[1].name);
            $('.drink3').text(data.drinks[2].name);
            $('.ingredient1').text(data.drinks[0].name);
            $('.ingredient2').text(data.drinks[1].name);
            $('.ingredient3').text(data.drinks[2].name);

        }).fail(function (err) {
            console.log(err);
        });
    });

    $('.order-form').submit(function (e) {
        e.preventDefault();
        var name = $('.name').val();
        var drinks = [];

        if ($('#drink1cbx').prop('checked')) {
            drinks.push($('.drink1').text());
        }

        if ($('#drink2cbx').prop('checked')) {
            drinks.push($('.drink2').text());
        }

        if ($('#drink3cbx').prop('checked')) {
            drinks.push($('.drink3').text());
        }

        console.log("posting");
        console.log(drinks);

        $.ajax({
            type: "POST",
            url: '/order',
            data: {
                name: name,
                drinks: drinks
            }
        }).done(function (data) {
            console.log(data);
        }).fail(function (err) {
            console.log(err);
        });
    });

    $('.create-recipe-form').submit(function (e) {
        e.preventDefault();
        var name = $('.drinkName').val();
        var drinks = [];

        console.log("prepping");

        if ($('#ingredient1cbx').prop('checked')) {
            drinks.push($('.ingredient1').text());
        }

        if ($('#ingredient2cbx').prop('checked')) {
            drinks.push($('.ingredient2').text());
        }

        if ($('#ingredient3cbx').prop('checked')) {
            drinks.push($('.ingredient3').text());
        }

        console.log("posting");
        console.log(drinks);

        $.ajax({
            type: "POST",
            url: '/createRecipe',
            data: {
                name: name,
                drinks: drinks
            }
        }).done(function (data) {
            console.log(data);
        }).fail(function (err) {
            console.log(err);
        });
    });

    $('.settings-form').submit(function (e) {
        e.preventDefault();

        var drink1Name = $('.drink1Name').val();
        var drink2Name = $('.drink2Name').val();
        var drink3Name = $('.drink3Name').val();
        var drink1IsMixer = $('#drink1IsMixerCbx').prop('checked');
        var drink2IsMixer = $('#drink2IsMixerCbx').prop('checked');
        var drink3IsMixer = $('#drink3IsMixerCbx').prop('checked');

        var drink1 = { name: drink1Name, isMixer: drink1IsMixer };
        var drink2 = { name: drink2Name, isMixer: drink2IsMixer };
        var drink3 = { name: drink3Name, isMixer: drink3IsMixer };

        var drinkSettings = [drink1, drink2, drink3];

        var settings = {drinkSettings: drinkSettings};

        console.log("posting these settings");
        console.log(settings);

        $.ajax({
            type: "POST",   
            url: '/settings',
            data: { data: settings },
        }).done(function (data) {
        }).fail(function (err) {
            console.log(err);
        });
    });
});