attribute vec3 position;
attribute vec3 position2;
attribute vec3 position3;
attribute vec3 position4;
uniform float uTime;
uniform float uProgress1;
uniform float uProgress2;
uniform float uProgress3;
uniform float uScale;
uniform float uIndex;
uniform float uAddScale;

const float PI =  3.14159265359;

#include '../_inc/rotate.glsl'

void main() {
  float time = uTime * .175;
  float radian = time + time * uIndex;
  mat2 rotation = rotate(radian * PI);

  vec3 firstPosition = mix(position, position2, uProgress1);
  vec3 secondPosition = mix(firstPosition, position3, uProgress2);
  vec3 lastPosition = mix(secondPosition, position4, uProgress3);
  vec3 distPosition = vec3(lastPosition.xy * rotation, lastPosition.z );

  float scale = clamp((uScale * .5) + (uAddScale * .75 - .25) + (abs(sin(uTime)) * .3 + .3) - .55 , 0., 2.);

  gl_Position = vec4(distPosition * scale, 1.);
}
