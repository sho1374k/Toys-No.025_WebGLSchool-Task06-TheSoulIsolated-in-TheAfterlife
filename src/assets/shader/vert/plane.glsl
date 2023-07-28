attribute vec3 position;
attribute vec3 normal;
varying vec3 vNormal;
varying vec3 vPosition;
uniform mat4 uModelMatrix;
uniform mat4 uMvpMatrix;
uniform mat4 uNormalMatrix;

void main() {
  vPosition   = (uModelMatrix * vec4(position, 1.0)).xyz;
  vec3 n = (uNormalMatrix * vec4(normal, 0.0)).xyz;
  vNormal = n;
  gl_Position = uMvpMatrix * vec4(position, 1.0);
}
