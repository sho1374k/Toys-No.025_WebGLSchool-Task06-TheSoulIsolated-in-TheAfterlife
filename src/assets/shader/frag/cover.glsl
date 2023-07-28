precision mediump float;
varying vec2 vUv;
uniform float uTime;

#include '../_inc/glsl-noise/simplex/3d.glsl'
#include '../_inc/noise/white.glsl'
#include '../_inc/transform/rotate.glsl'

const float PI =  3.14159265359;

void main() {
  vec3 color = vec3(0.1, 0.1, 0.28);

  vec2 uv = vUv;
  uv = uv * rotate(PI * 0.15);

  float sn = snoise(vec3(uv.x * 400.0, uv.y, uTime * 1.5 + sin(uTime) * 0.5));
  vec4 color1 = vec4(color * vec3(sn), sn);

  float wn = noise(vUv);
  vec4 color2 = vec4(color * abs(vec3(wn)), wn);

  vec4 dist = mix(color1, color2, 0.7);
  gl_FragColor = dist;
}
