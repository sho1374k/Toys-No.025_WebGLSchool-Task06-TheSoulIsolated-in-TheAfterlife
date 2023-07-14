precision mediump float;
varying vec2 vUv;
varying float vTime;

#include '../_inc/noise/white.glsl'

void main() {
  vec2 position = 2. * vUv - vec2(1.);
  float l = length(position);
  float n = noise(vUv) * .4;
  vec3 color = vec3(1.5 - l) * abs(vec3(n));
  gl_FragColor = vec4(color,n);
}
