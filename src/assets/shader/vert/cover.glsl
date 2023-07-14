attribute vec3 position;
attribute vec2 uv;
varying vec2 vUv;
varying float vTime;
uniform float uTime;

void main() {
  vUv = uv;
  vTime = uTime;
  gl_Position = vec4(position, 1.);
}
