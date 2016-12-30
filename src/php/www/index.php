<?php

include __DIR__ . '/../vendor/autoload.php';

use Silex\Application;
use Silex\Provider\TwigServiceProvider;

$app = new Application(['debug' => true]);
$app->register(new TwigServiceProvider(), [
    'twig.path' => __DIR__ . '/../views',
]);

$app->get("/", function (Application $app) {
    return $app['twig']->render('index.twig', []);
});

$app->run();