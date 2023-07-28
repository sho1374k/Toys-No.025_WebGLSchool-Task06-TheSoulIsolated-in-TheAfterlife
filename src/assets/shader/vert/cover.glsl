attribute vec3 position;
attribute vec2 uv;
varying vec2 vUv;
uniform mat4 uMvpMatrix;

void main() {
  vUv = uv;
  gl_Position = uMvpMatrix * vec4(position, 1.0);
}
