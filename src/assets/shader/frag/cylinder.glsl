precision mediump float;
varying float vTime;
varying vec3 vNormal;
varying vec3 vPosition;
uniform float uAlpha;
uniform float uLightUp;
uniform vec3 uColor;
uniform vec3 uLightPosition;
uniform mat4 uInverseMatrix;

#include '../_inc/config.glsl'

void main() {
  vec3 lightVector = uLightPosition - vPosition;
  vec3 inverseLight = normalize(uInverseMatrix * vec4(lightVector, 0.0)).xyz;
  float diffuse = clamp(pow( dot(vNormal, inverseLight), POW), 0.0, 1.0) - DIMMING;
  vec4 dist = vec4(uColor, 1.0) * vec4(vec3(diffuse), 1.0) + AMBIENT_COLOR;
  dist.rgb = dist.rgb * uLightUp;
  gl_FragColor = dist;
  gl_FragColor.a = uAlpha;
}
