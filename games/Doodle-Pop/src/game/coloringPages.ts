import { ColoringPageDef } from './types';

export const COLORING_PAGES: ColoringPageDef[] = [
  { id: 'dino', title: 'Happy Dino', mode: 'coloring', accent: '#8AC926' },
  { id: 'rocket', title: 'Space Rocket', mode: 'coloring', accent: '#FF595E' },
  { id: 'castle', title: 'Magic Castle', mode: 'coloring', accent: '#6A4C93' },
  { id: 'whale', title: 'Splash Whale', mode: 'coloring', accent: '#1982C4' },
  { id: 'butterfly', title: 'Garden Butterfly', mode: 'coloring', accent: '#FF6B9D' },
  { id: 'unicorn', title: 'Star Unicorn', mode: 'coloring', accent: '#C77DFF' },
  { id: 'lion', title: 'Sunny Lion', mode: 'coloring', accent: '#FF924C' },
  { id: 'icecream', title: 'Triple Sundae', mode: 'coloring', accent: '#FFCA3A' },
  { id: 'freedraw', title: 'Blank Paper', mode: 'freedraw', accent: '#2EC4B6' },
  { id: 'glow', title: 'Glow Neon', mode: 'glow', accent: '#3A50E8' },
];

export function getPageById(id: string): ColoringPageDef {
  return COLORING_PAGES.find((p) => p.id === id) ?? COLORING_PAGES[0];
}

/**
 * Renders crisp, enclosed coloring book line art into a transparent canvas context.
 * Uses a centered 1000x700 virtual artboard so every region is completely closed
 * and works reliably with scanline flood-fill at any resolution.
 */
export function renderColoringTemplate(
  ctx: CanvasRenderingContext2D,
  pageId: string,
  width: number,
  height: number,
  strokeColor = '#232946'
): void {
  ctx.clearRect(0, 0, width, height);
  if (pageId === 'freedraw' || pageId === 'glow') {
    return;
  }

  const vw = 1000;
  const vh = 700;
  const scale = Math.min(width / vw, height / vh) * 0.92;
  const offsetX = (width - vw * scale) / 2;
  const offsetY = (height - vh * scale) / 2;

  ctx.save();
  ctx.translate(offsetX, offsetY);
  ctx.scale(scale, scale);
  ctx.strokeStyle = strokeColor;
  ctx.fillStyle = strokeColor;
  ctx.lineWidth = 7;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  const circle = (cx: number, cy: number, r: number) => {
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.stroke();
  };

  const ellipse = (cx: number, cy: number, rx: number, ry: number, rot = 0) => {
    ctx.beginPath();
    ctx.ellipse(cx, cy, rx, ry, rot, 0, Math.PI * 2);
    ctx.stroke();
  };

  const cloud = (cx: number, cy: number, s = 1) => {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.scale(s, s);
    ctx.beginPath();
    ctx.moveTo(-68, 22);
    ctx.bezierCurveTo(-92, 22, -96, -12, -68, -18);
    ctx.bezierCurveTo(-62, -48, -22, -54, -4, -34);
    ctx.bezierCurveTo(16, -58, 62, -46, 62, -16);
    ctx.bezierCurveTo(92, -12, 92, 22, 62, 22);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  };

  const star = (cx: number, cy: number, rOuter: number, rInner: number) => {
    ctx.beginPath();
    for (let i = 0; i < 10; i++) {
      const r = i % 2 === 0 ? rOuter : rInner;
      const a = (i * Math.PI) / 5 - Math.PI / 2;
      const x = cx + Math.cos(a) * r;
      const y = cy + Math.sin(a) * r;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.stroke();
  };

  switch (pageId) {
    case 'dino': {
      // Ground hill line (edge-to-edge of canvas for clean fill)
      ctx.beginPath();
      ctx.moveTo(-120, 560);
      ctx.quadraticCurveTo(500, 552, 1120, 565);
      ctx.stroke();

      // Sun & rays
      circle(155, 130, 52);
      for (let i = 0; i < 8; i++) {
        const a = (i * Math.PI) / 4;
        ctx.beginPath();
        ctx.moveTo(155 + Math.cos(a) * 68, 130 + Math.sin(a) * 68);
        ctx.lineTo(155 + Math.cos(a) * 90, 130 + Math.sin(a) * 90);
        ctx.stroke();
      }
      cloud(820, 125, 0.95);
      cloud(520, 100, 0.7);

      // Dino body + long neck + tail (feet land flush on ground curve y=556)
      ctx.beginPath();
      ctx.moveTo(260, 440);
      ctx.quadraticCurveTo(175, 430, 145, 360);
      ctx.quadraticCurveTo(195, 385, 285, 380);
      ctx.quadraticCurveTo(355, 290, 495, 305);
      ctx.quadraticCurveTo(565, 225, 595, 155);
      ctx.bezierCurveTo(615, 100, 715, 102, 725, 165);
      ctx.bezierCurveTo(732, 212, 680, 228, 650, 224);
      ctx.quadraticCurveTo(628, 300, 610, 395);
      ctx.quadraticCurveTo(625, 455, 595, 505);
      // Front leg
      ctx.lineTo(595, 556);
      ctx.lineTo(535, 556);
      ctx.lineTo(535, 505);
      // Belly
      ctx.quadraticCurveTo(455, 520, 385, 505);
      // Back leg
      ctx.lineTo(385, 556);
      ctx.lineTo(325, 556);
      ctx.lineTo(325, 495);
      ctx.quadraticCurveTo(285, 470, 260, 440);
      ctx.closePath();
      ctx.stroke();

      // Cute Dino eye, smile, cheek & spots
      ctx.beginPath();
      ctx.arc(678, 154, 10, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(690, 185, 20, 0.15, Math.PI * 0.72);
      ctx.stroke();
      ellipse(460, 370, 28, 22);
      ellipse(395, 415, 22, 18);
      ellipse(525, 420, 20, 16);

      // Back plates sitting cleanly above the back contour
      const drawPlate = (px: number, py: number, r: number, rot: number) => {
        ctx.save();
        ctx.translate(px, py);
        ctx.rotate(rot);
        ctx.beginPath();
        ctx.arc(0, 0, r, Math.PI, 0);
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
      };
      drawPlate(368, 316, 20, -0.35);
      drawPlate(430, 294, 22, -0.1);
      drawPlate(495, 294, 20, 0.22);

      // Bush on right sitting flush on ground
      ctx.beginPath();
      ctx.moveTo(760, 560);
      ctx.bezierCurveTo(750, 505, 815, 485, 845, 510);
      ctx.bezierCurveTo(885, 475, 955, 510, 935, 561);
      ctx.closePath();
      ctx.stroke();
      break;
    }

    case 'rocket': {
      // Stars and ringed planet
      star(165, 165, 38, 17);
      star(845, 145, 34, 15);
      star(210, 520, 28, 12);

      // Crescent moon
      ctx.beginPath();
      ctx.arc(825, 470, 62, 0.4, Math.PI * 1.65);
      ctx.quadraticCurveTo(790, 470, 825, 470 + Math.sin(0.4) * 62);
      ctx.stroke();

      // Ringed planet top-left
      circle(220, 325, 52);
      ctx.beginPath();
      ctx.ellipse(220, 330, 96, 22, -0.25, -0.2, Math.PI + 0.2);
      ctx.stroke();

      // Rocket body
      ctx.save();
      ctx.translate(520, 340);
      ctx.rotate(0.28);

      // Nose & main hull
      ctx.beginPath();
      ctx.moveTo(0, -210);
      ctx.bezierCurveTo(75, -135, 86, -20, 68, 125);
      ctx.lineTo(-68, 125);
      ctx.bezierCurveTo(-86, -20, -75, -135, 0, -210);
      ctx.closePath();
      ctx.stroke();

      // Nose cone divider
      ctx.beginPath();
      ctx.moveTo(-58, -108);
      ctx.quadraticCurveTo(0, -92, 58, -108);
      ctx.stroke();

      // Porthole window
      circle(0, -22, 42);
      circle(0, -22, 24);

      // Left Fin
      ctx.beginPath();
      ctx.moveTo(-70, 45);
      ctx.quadraticCurveTo(-132, 90, -118, 155);
      ctx.lineTo(-68, 125);
      ctx.closePath();
      ctx.stroke();

      // Right Fin
      ctx.beginPath();
      ctx.moveTo(70, 45);
      ctx.quadraticCurveTo(132, 90, 118, 155);
      ctx.lineTo(68, 125);
      ctx.closePath();
      ctx.stroke();

      // Exhaust flame
      ctx.beginPath();
      ctx.moveTo(-42, 125);
      ctx.quadraticCurveTo(-55, 200, 0, 245);
      ctx.quadraticCurveTo(55, 200, 42, 125);
      ctx.closePath();
      ctx.stroke();

      ctx.restore();
      break;
    }

    case 'castle': {
      // Rolling hill
      ctx.beginPath();
      ctx.moveTo(-120, 580);
      ctx.quadraticCurveTo(500, 540, 1120, 585);
      ctx.stroke();

      cloud(170, 130, 0.9);
      cloud(835, 145, 0.85);

      // Left Tower
      ctx.strokeRect(235, 280, 110, 285);
      // Right Tower
      ctx.strokeRect(655, 280, 110, 285);
      // Center Keep
      ctx.strokeRect(345, 330, 310, 235);
      // Center Upper Spire
      ctx.strokeRect(435, 195, 130, 135);

      // Roof cones
      const roof = (x: number, y: number, w: number, h: number) => {
        ctx.beginPath();
        ctx.moveTo(x - 12, y);
        ctx.lineTo(x + w / 2, y - h);
        ctx.lineTo(x + w + 12, y);
        ctx.closePath();
        ctx.stroke();
        // Flag pole + pennant
        ctx.beginPath();
        ctx.moveTo(x + w / 2, y - h);
        ctx.lineTo(x + w / 2, y - h - 48);
        ctx.lineTo(x + w / 2 + 44, y - h - 32);
        ctx.lineTo(x + w / 2, y - h - 16);
        ctx.stroke();
      };
      roof(235, 280, 110, 105);
      roof(655, 280, 110, 105);
      roof(435, 195, 130, 110);

      // Arched Grand Door
      ctx.beginPath();
      ctx.moveTo(445, 565);
      ctx.lineTo(445, 455);
      ctx.arc(500, 455, 55, Math.PI, 0);
      ctx.lineTo(555, 565);
      ctx.closePath();
      ctx.stroke();

      // Tower arched windows
      const archWin = (cx: number, cy: number) => {
        ctx.beginPath();
        ctx.moveTo(cx - 20, cy + 32);
        ctx.lineTo(cx - 20, cy);
        ctx.arc(cx, cy, 20, Math.PI, 0);
        ctx.lineTo(cx + 20, cy + 32);
        ctx.closePath();
        ctx.stroke();
      };
      archWin(290, 360);
      archWin(710, 360);
      archWin(500, 255);
      break;
    }

    case 'whale': {
      // Ocean waves
      ctx.beginPath();
      ctx.moveTo(-120, 480);
      for (let x = -120; x <= 1120; x += 155) {
        ctx.quadraticCurveTo(x + 78, 435, x + 155, 480);
      }
      ctx.stroke();

      circle(830, 125, 52);
      cloud(210, 125, 0.9);

      // Whale body
      ctx.beginPath();
      ctx.moveTo(250, 445);
      ctx.bezierCurveTo(220, 270, 470, 210, 625, 290);
      ctx.bezierCurveTo(685, 320, 725, 385, 780, 375);
      // Tail flukes
      ctx.bezierCurveTo(820, 320, 885, 305, 875, 355);
      ctx.quadraticCurveTo(835, 390, 815, 400);
      ctx.quadraticCurveTo(860, 425, 885, 455);
      ctx.bezierCurveTo(835, 475, 780, 455, 760, 425);
      ctx.quadraticCurveTo(665, 480, 480, 478);
      ctx.quadraticCurveTo(310, 478, 250, 445);
      ctx.closePath();
      ctx.stroke();

      // Whale belly stripes
      ctx.beginPath();
      ctx.moveTo(265, 415);
      ctx.quadraticCurveTo(420, 405, 560, 468);
      ctx.stroke();

      // Cute eye & smile
      ctx.beginPath();
      ctx.arc(338, 352, 11, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(285, 385, 24, 0.2, Math.PI * 0.75);
      ctx.stroke();

      // Water spout droplets
      const drop = (dx: number, dy: number, rot: number) => {
        ctx.save();
        ctx.translate(dx, dy);
        ctx.rotate(rot);
        ctx.beginPath();
        ctx.moveTo(0, -28);
        ctx.quadraticCurveTo(22, 6, 0, 22);
        ctx.quadraticCurveTo(-22, 6, 0, -28);
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
      };
      drop(455, 195, -0.35);
      drop(505, 175, 0);
      drop(555, 195, 0.35);
      break;
    }

    case 'butterfly': {
      // Ground & flowers
      ctx.beginPath();
      ctx.moveTo(-120, 585);
      ctx.quadraticCurveTo(500, 545, 1120, 585);
      ctx.stroke();

      // Upper wings (symmetrical)
      const upperWing = (dir: number) => {
        ctx.beginPath();
        ctx.moveTo(500 + dir * 24, 305);
        ctx.bezierCurveTo(
          500 + dir * 180,
          115,
          500 + dir * 365,
          170,
          500 + dir * 285,
          345
        );
        ctx.bezierCurveTo(
          500 + dir * 245,
          410,
          500 + dir * 115,
          395,
          500 + dir * 24,
          355
        );
        ctx.closePath();
        ctx.stroke();

        // Wing spot
        circle(500 + dir * 215, 265, 48);
        circle(500 + dir * 135, 325, 24);
      };

      const lowerWing = (dir: number) => {
        ctx.beginPath();
        ctx.moveTo(500 + dir * 22, 365);
        ctx.bezierCurveTo(
          500 + dir * 240,
          375,
          500 + dir * 255,
          545,
          500 + dir * 135,
          535
        );
        ctx.bezierCurveTo(
          500 + dir * 65,
          528,
          500 + dir * 32,
          455,
          500 + dir * 20,
          415
        );
        ctx.closePath();
        ctx.stroke();
        circle(500 + dir * 145, 455, 30);
      };

      upperWing(-1);
      upperWing(1);
      lowerWing(-1);
      lowerWing(1);

      // Butterfly body & head
      ellipse(500, 385, 28, 125);
      circle(500, 240, 38);
      ctx.beginPath();
      ctx.arc(486, 232, 6, 0, Math.PI * 2);
      ctx.arc(514, 232, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(500, 246, 14, 0.2, Math.PI - 0.2);
      ctx.stroke();

      // Antennae
      ctx.beginPath();
      ctx.moveTo(485, 206);
      ctx.quadraticCurveTo(445, 130, 415, 142);
      ctx.moveTo(515, 206);
      ctx.quadraticCurveTo(555, 130, 585, 142);
      ctx.stroke();
      circle(410, 145, 12);
      circle(590, 145, 12);
      break;
    }

    case 'unicorn': {
      cloud(215, 520, 1.15);
      cloud(790, 505, 1.1);
      star(180, 180, 34, 15);
      star(820, 175, 36, 16);

      // Unicorn neck & head
      ctx.beginPath();
      ctx.moveTo(350, 510);
      ctx.quadraticCurveTo(360, 355, 415, 275);
      ctx.bezierCurveTo(435, 205, 535, 195, 595, 235);
      ctx.bezierCurveTo(685, 255, 735, 315, 715, 365);
      ctx.bezierCurveTo(695, 405, 625, 395, 575, 370);
      ctx.quadraticCurveTo(545, 435, 560, 515);
      ctx.closePath();
      ctx.stroke();

      // Striped Horn
      ctx.beginPath();
      ctx.moveTo(525, 210);
      ctx.lineTo(595, 85);
      ctx.lineTo(575, 225);
      ctx.closePath();
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(545, 175);
      ctx.lineTo(582, 185);
      ctx.moveTo(564, 140);
      ctx.lineTo(589, 148);
      ctx.stroke();

      // Ear
      ctx.beginPath();
      ctx.moveTo(468, 220);
      ctx.quadraticCurveTo(455, 148, 505, 195);
      ctx.closePath();
      ctx.stroke();

      // Mane curls
      const curl = (cx: number, cy: number, r: number) => {
        circle(cx, cy, r);
      };
      curl(408, 255, 34);
      curl(375, 315, 36);
      curl(358, 382, 36);
      curl(348, 445, 32);

      // Eye & smile
      ctx.beginPath();
      ctx.arc(605, 295, 12, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(675, 348, 18, 0.3, Math.PI * 0.85);
      ctx.stroke();
      break;
    }

    case 'lion': {
      ctx.beginPath();
      ctx.moveTo(-120, 585);
      ctx.quadraticCurveTo(500, 545, 1120, 585);
      ctx.stroke();

      // Big scalloped mane
      ctx.beginPath();
      const petals = 14;
      for (let i = 0; i < petals; i++) {
        const a1 = (i * Math.PI * 2) / petals;
        const aMid = ((i + 0.5) * Math.PI * 2) / petals;
        const a2 = ((i + 1) * Math.PI * 2) / petals;
        const x1 = 500 + Math.cos(a1) * 145;
        const y1 = 290 + Math.sin(a1) * 145;
        const cx = 500 + Math.cos(aMid) * 195;
        const cy = 290 + Math.sin(aMid) * 195;
        const x2 = 500 + Math.cos(a2) * 145;
        const y2 = 290 + Math.sin(a2) * 145;
        if (i === 0) ctx.moveTo(x1, y1);
        ctx.quadraticCurveTo(cx, cy, x2, y2);
      }
      ctx.closePath();
      ctx.stroke();

      // Lion face
      circle(500, 290, 112);
      circle(415, 195, 28);
      circle(585, 195, 28);

      // Eyes, nose, mouth
      ctx.beginPath();
      ctx.arc(458, 272, 11, 0, Math.PI * 2);
      ctx.arc(542, 272, 11, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(482, 304);
      ctx.lineTo(518, 304);
      ctx.lineTo(500, 324);
      ctx.closePath();
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(482, 336, 18, 0.1, Math.PI - 0.1);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(518, 336, 18, 0.1, Math.PI - 0.1);
      ctx.stroke();

      // Cute sitting body & paws
      ctx.beginPath();
      ctx.moveTo(418, 428);
      ctx.quadraticCurveTo(385, 515, 425, 565);
      ctx.lineTo(575, 565);
      ctx.quadraticCurveTo(615, 515, 582, 428);
      ctx.stroke();
      ellipse(455, 558, 32, 20);
      ellipse(545, 558, 32, 20);
      break;
    }

    case 'icecream': {
      star(185, 175, 32, 14);
      star(815, 185, 32, 14);

      // Waffle Cone
      ctx.beginPath();
      ctx.moveTo(375, 365);
      ctx.lineTo(625, 365);
      ctx.lineTo(500, 625);
      ctx.closePath();
      ctx.stroke();

      // Waffle grid lines
      ctx.beginPath();
      ctx.moveTo(415, 445);
      ctx.lineTo(585, 445);
      ctx.moveTo(455, 530);
      ctx.lineTo(545, 530);
      ctx.moveTo(445, 365);
      ctx.lineTo(525, 570);
      ctx.moveTo(555, 365);
      ctx.lineTo(475, 570);
      ctx.stroke();

      // Bottom Scoop
      ctx.beginPath();
      ctx.arc(500, 340, 128, Math.PI, 0);
      ctx.closePath();
      ctx.stroke();

      // Middle Scoop
      ctx.beginPath();
      ctx.arc(500, 245, 104, Math.PI, 0);
      ctx.closePath();
      ctx.stroke();

      // Top Scoop
      ctx.beginPath();
      ctx.arc(500, 165, 82, Math.PI, 0);
      ctx.closePath();
      ctx.stroke();

      // Cherry on top
      circle(500, 72, 28);
      ctx.beginPath();
      ctx.moveTo(500, 44);
      ctx.quadraticCurveTo(518, 15, 545, 20);
      ctx.stroke();

      // Cute faces on scoops
      ctx.beginPath();
      ctx.arc(474, 145, 7, 0, Math.PI * 2);
      ctx.arc(526, 145, 7, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(500, 155, 14, 0.2, Math.PI - 0.2);
      ctx.stroke();
      break;
    }
  }

  ctx.restore();
}
