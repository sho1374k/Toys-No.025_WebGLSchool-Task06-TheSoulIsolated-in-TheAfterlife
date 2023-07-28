precision mediump float;
varying vec3 vNormal;
varying vec3 vPosition;
uniform vec3 uLightPosition;
uniform mat4 uInverseMatrix;
uniform vec2 uResolution;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform float uTime;
uniform float uLightUp;

#include '../_inc/config.glsl'
#include '../_inc/noise/noise.glsl'
#include '../_inc/noise/fbm.glsl'

void main() {
  vec2 position = gl_FragCoord.xy / uResolution.xy;
  position.x *= uResolution.x / uResolution.y;

  vec2 anime1 = vec2(0.0);
  anime1.x = fbm( position * 10.0);
  anime1.y = fbm( position * 10.0 + vec2(1.0));

  vec2 anime2 = vec2(0.0);
  anime2.x = fbm( position * 10.0 + 1.0 * anime1 + vec2(1.7,9.2)+ 0.15 * uTime * 2.0);
  anime2.y = fbm( position * 10.0 + 1.0 * anime1 + vec2(8.3,2.8)+ 0.126 * uTime * 2.0);

  float fbm = fbm(position + anime2);

  vec3 color = mix(uColor1, uColor2, clamp((fbm * fbm) * 4.0,0.0,1.0));
  color = mix(color, uColor3, clamp(length(anime1),0.0,1.0));
  color = mix(color, uColor1, clamp(length(anime2.x),0.0,1.0));
  color = (fbm * fbm * fbm + 0.6 * fbm * fbm + 0.5 * fbm) * color;

  vec3 lightVector = uLightPosition - vPosition;
  vec3 inverseLight = normalize(uInverseMatrix * vec4(lightVector, 0.0)).xyz;
  float diffuse = clamp(pow( dot(vNormal, inverseLight), POW), 0.0, 1.0) - DIMMING;
  vec4 dist = vec4(color, 1.0) * vec4(vec3(diffuse), 1.0) + AMBIENT_COLOR;
  dist.rgb = dist.rgb * uLightUp;
  gl_FragColor =  dist;
}

