float rand (vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898,78.233)))* 43758.5453123);
}
float anime(float f){
  float speed = 5.0;
  return sin(f * 10.0 + uTime * speed) * 0.5;
}
float noise(vec2 uv){
  float o = anime(rand(uv));
  return o;
}