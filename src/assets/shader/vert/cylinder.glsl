attribute vec3 position;
attribute vec3 normal;
varying float vTime;
varying vec3 vNormal;
varying vec3 vPosition;
uniform float uTime;
uniform float uScale;
uniform mat4 uModelMatrix;
uniform mat4 uMvpMatrix;
uniform mat4 uNormalMatrix;

void main() {
  vTime = uTime;
  vPosition   = (uModelMatrix * vec4(position, 1.0)).xyz;
  vNormal = (uNormalMatrix * vec4(normal, 0.0)).xyz;
  gl_Position = uMvpMatrix * vec4(position * uScale, 1.0);
}