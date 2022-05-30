import sharp from 'sharp';

const img = sharp('./assets/logo.svg').toFile('./assets/logo.png');
