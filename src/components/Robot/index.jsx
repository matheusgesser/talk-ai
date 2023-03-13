/*
Source: https://sketchfab.com/3d-models/robot-playground-59fc99d8dcb146f3a6c16dbbcc4680da
Title: Robot Playground
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./public/robot-transformed.glb')
  const { actions, names } = useAnimations(animations, group)

  useEffect(() => {
    actions[names[0]].reset().play()
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.04}>
          <group name="000846fff9e546569ee038af7e24655afbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="holo" scale={1.88}>
                  <group name="group36" position={[0.33, 0, -0.1]} rotation={[-Math.PI, -0.14, -Math.PI]} scale={0.99}>
                    <group name="group39" rotation={[0, 0.88, 0]}>
                      <group name="group37" position={[-4.63, 14.29, 1.99]}>
                        <group name="group31" position={[4.63, -4.89, -1.99]} rotation={[0.01, 0, 0.01]} scale={1.18}>
                          <group name="pPlatonic3" position={[-0.35, -0.12, -0.32]} scale={0}>
                            <mesh name="pPlatonic3_holo1_0" geometry={nodes.pPlatonic3_holo1_0.geometry} material={materials.holo1} />
                          </group>
                          <group name="group35" position={[0.22, 0.11, 0]} rotation={[-Math.PI, -1.46, Math.PI]}>
                            <group name="group38" position={[0.04, 0.75, 0.25]}>
                              <group name="group29" position={[-0.03, -10.24, -0.04]} rotation={[0, Math.PI / 4, 0]}>
                                <group name="group21" position={[-12.69, 10.7, 0]} scale={0.24}>
                                  <group name="MASH1_ReproMesh12" position={[0, 0.24, 0]} rotation={[-1.13, 0, Math.PI / 2]} scale={[1.03, 1, 1.03]}>
                                    <mesh name="MASH1_ReproMesh12_holo1_0" geometry={nodes.MASH1_ReproMesh12_holo1_0.geometry} material={materials.holo1} />
                                  </group>
                                  <group name="group14" rotation={[0, 1.13, 0]}>
                                    <group name="group30" rotation={[0.49, 0, 0]} scale={3.17}>
                                      <group name="pSuperShape2" scale={2.08}>
                                        <mesh name="pSuperShape2_holo1_0" geometry={nodes.pSuperShape2_holo1_0.geometry} material={materials.holo1} />
                                      </group>
                                      <group name="pSuperShape3" scale={2.08}>
                                        <mesh name="pSuperShape3_holo1_0" geometry={nodes.pSuperShape3_holo1_0.geometry} material={materials.holo1} />
                                      </group>
                                    </group>
                                  </group>
                                </group>
                              </group>
                              <group name="group28" position={[-0.03, -10.24, -0.04]} rotation={[0, Math.PI / 2, 0]}>
                                <group name="group21_1" position={[-12.69, 10.7, 0]} scale={0.24}>
                                  <group name="MASH1_ReproMesh12_1" position={[0, 0.24, 0]} rotation={[-1.13, 0, Math.PI / 2]} scale={[1.03, 1, 1.03]}>
                                    <group name="MASH1_ReproMesh19">
                                      <mesh name="MASH1_ReproMesh19_holo1_0" geometry={nodes.MASH1_ReproMesh19_holo1_0.geometry} material={materials.holo1} />
                                    </group>
                                  </group>
                                  <group name="group14_1" rotation={[0, 1.13, 0]}>
                                    <group name="group7" rotation={[0.32, -0.66, 1.52]} scale={2.05}>
                                      <group name="pGear1">
                                        <mesh name="pGear1_holo1_0" geometry={nodes.pGear1_holo1_0.geometry} material={materials.holo1} />
                                      </group>
                                      <group name="pGear2">
                                        <mesh name="pGear2_holo1_0" geometry={nodes.pGear2_holo1_0.geometry} material={materials.holo1} />
                                      </group>
                                    </group>
                                  </group>
                                </group>
                              </group>
                              <group name="group27" position={[-0.03, -10.24, -0.04]} rotation={[-Math.PI, Math.PI / 4, Math.PI]}>
                                <group name="group20" position={[-12.69, 10.7, 0]} scale={0.24}>
                                  <group name="MASH1_ReproMesh11" position={[0, 0.24, 0]} rotation={[-1.13, 0, Math.PI / 2]} scale={[1.03, 1, 1.03]}>
                                    <group name="MASH1_ReproMesh18">
                                      <mesh name="MASH1_ReproMesh18_holo1_0" geometry={nodes.MASH1_ReproMesh18_holo1_0.geometry} material={materials.holo1} />
                                    </group>
                                  </group>
                                  <group name="group13" rotation={[0, 1.13, 0]}>
                                    <group name="group6" position={[0, 0.03, 0]} rotation={[0.48, 0.1, 0]} scale={2.37}>
                                      <group name="pHelix1">
                                        <mesh name="pHelix1_holo1_0" geometry={nodes.pHelix1_holo1_0.geometry} material={materials.holo1} />
                                      </group>
                                      <group name="pHelix2">
                                        <mesh name="pHelix2_holo1_0" geometry={nodes.pHelix2_holo1_0.geometry} material={materials.holo1} />
                                      </group>
                                    </group>
                                  </group>
                                </group>
                              </group>
                              <group name="group26" position={[-0.03, -10.24, -0.04]} rotation={[-Math.PI, 0, -Math.PI]}>
                                <group name="group19" position={[-12.69, 10.7, 0]} scale={0.24}>
                                  <group name="MASH1_ReproMesh10" position={[0, 0.24, 0]} rotation={[-1.13, 0, Math.PI / 2]} scale={[1.03, 1, 1.03]}>
                                    <group name="MASH1_ReproMesh17">
                                      <mesh name="MASH1_ReproMesh17_holo1_0" geometry={nodes.MASH1_ReproMesh17_holo1_0.geometry} material={materials.holo1} />
                                    </group>
                                  </group>
                                  <group name="group12" rotation={[0, 1.13, 0]}>
                                    <group name="group4" position={[-0.25, 1.1, -0.4]} rotation={[-0.18, -0.67, 0.27]} scale={1.55}>
                                      <group name="pPyramid1" scale={[5.26, 7.64, 5.26]}>
                                        <mesh name="pPyramid1_holo1_0" geometry={nodes.pPyramid1_holo1_0.geometry} material={materials.holo1} />
                                      </group>
                                      <group name="pPyramid2" scale={[5.57, 8.09, 5.57]}>
                                        <mesh name="pPyramid2_holo1_0" geometry={nodes.pPyramid2_holo1_0.geometry} material={materials.holo1} />
                                      </group>
                                    </group>
                                  </group>
                                </group>
                              </group>
                              <group name="group25" position={[-0.03, -10.24, -0.04]} rotation={[-Math.PI, -Math.PI / 4, -Math.PI]}>
                                <group name="group18" position={[-12.69, 10.7, 0]} scale={0.24}>
                                  <group name="MASH1_ReproMesh9" position={[0, 0.24, 0]} rotation={[-1.13, 0, Math.PI / 2]} scale={[1.03, 1, 1.03]}>
                                    <group name="MASH1_ReproMesh16">
                                      <mesh name="MASH1_ReproMesh16_holo1_0" geometry={nodes.MASH1_ReproMesh16_holo1_0.geometry} material={materials.holo1} />
                                    </group>
                                  </group>
                                  <group name="group11" rotation={[0, 1.13, 0]}>
                                    <group name="group5" rotation={[0.22, 0.16, 0.93]} scale={1.89}>
                                      <group name="pTorus2">
                                        <mesh name="pTorus2_holo1_0" geometry={nodes.pTorus2_holo1_0.geometry} material={materials.holo1} />
                                      </group>
                                      <group name="pTorus1">
                                        <mesh name="pTorus1_holo1_0" geometry={nodes.pTorus1_holo1_0.geometry} material={materials.holo1} />
                                      </group>
                                    </group>
                                  </group>
                                </group>
                              </group>
                              <group name="group23" position={[-0.03, -10.24, -0.04]} rotation={[0, -Math.PI / 4, 0]}>
                                <group name="group16" position={[-12.69, 10.7, 0]} scale={0.24}>
                                  <group name="MASH1_ReproMesh7" position={[0, 0.24, 0]} rotation={[-1.13, 0, Math.PI / 2]} scale={[1.03, 1, 1.03]}>
                                    <group name="MASH1_ReproMesh14">
                                      <mesh name="MASH1_ReproMesh14_holo1_0" geometry={nodes.MASH1_ReproMesh14_holo1_0.geometry} material={materials.holo1} />
                                    </group>
                                  </group>
                                  <group name="group9" rotation={[0, 1.13, 0]} scale={1.3}>
                                    <group name="group2" rotation={[-0.62, -0.62, 0.1]}>
                                      <group name="pCube1" scale={4.81}>
                                        <mesh name="pCube1_holo1_0" geometry={nodes.pCube1_holo1_0.geometry} material={materials.holo1} />
                                      </group>
                                      <group name="pCube2" scale={4.92}>
                                        <mesh name="pCube2_holo1_0" geometry={nodes.pCube2_holo1_0.geometry} material={materials.holo1} />
                                      </group>
                                    </group>
                                  </group>
                                </group>
                              </group>
                              <group name="group22" position={[-0.03, -10.24, -0.04]}>
                                <group name="group15" position={[-12.69, 10.7, 0]} scale={0.24}>
                                  <group name="MASH1_ReproMesh6" position={[0, 0.24, 0]} rotation={[-1.13, 0, Math.PI / 2]} scale={[1.03, 1, 1.03]}>
                                    <group name="MASH1_ReproMesh13">
                                      <mesh name="MASH1_ReproMesh13_holo1_0" geometry={nodes.MASH1_ReproMesh13_holo1_0.geometry} material={materials.holo1} />
                                    </group>
                                  </group>
                                  <group name="group8" rotation={[0, 1.13, 0]}>
                                    <group name="group1" rotation={[-0.51, 0, 0]} scale={[1.22, 0.98, 1.22]}>
                                      <group name="pCylinder2" scale={3.57}>
                                        <mesh name="pCylinder2_holo1_0" geometry={nodes.pCylinder2_holo1_0.geometry} material={materials.holo1} />
                                      </group>
                                      <group name="pCylinder3" scale={3.67}>
                                        <mesh name="pCylinder3_holo1_0" geometry={nodes.pCylinder3_holo1_0.geometry} material={materials.holo1} />
                                      </group>
                                    </group>
                                  </group>
                                </group>
                              </group>
                              <group name="pCylinder4" position={[-0.03, 0.46, -0.04]} scale={[0.82, 0.44, 0.82]}>
                                <mesh name="pCylinder4_holo1_0" geometry={nodes.pCylinder4_holo1_0.geometry} material={materials.holo1} />
                              </group>
                            </group>
                            <group name="group24" position={[0.02, -10.72, 0.22]} rotation={[0, -Math.PI / 2, 0]}>
                              <group name="group17" position={[-12.36, 11.8, 0.23]} scale={0.3}>
                                <group name="group10" rotation={[Math.PI, -1.16, Math.PI]}>
                                  <group name="group3" scale={1.44}>
                                    <group name="pPlatonic1" scale={3.24}>
                                      <mesh name="pPlatonic1_holo1_0" geometry={nodes.pPlatonic1_holo1_0.geometry} material={materials.holo1} />
                                    </group>
                                    <group name="pPlatonic2" scale={3.41}>
                                      <mesh name="pPlatonic2_holo1_0" geometry={nodes.pPlatonic2_holo1_0.geometry} material={materials.holo1} />
                                    </group>
                                  </group>
                                </group>
                                <group name="MASH1_ReproMesh8" position={[0.23, 0.01, -0.55]} rotation={[-1.13, 0, Math.PI / 2]} scale={[0.82, 0.79, 0.82]}>
                                  <group name="MASH1_ReproMesh15">
                                    <mesh name="MASH1_ReproMesh15_holo1_0" geometry={nodes.MASH1_ReproMesh15_holo1_0.geometry} material={materials.holo1} />
                                  </group>
                                </group>
                              </group>
                            </group>
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group name="ground" position={[0, 0.39, 0]}>
                    <group name="pPipe4" position={[0, -0.43, 0]} rotation={[0, -0.31, 0]}>
                      <group name="MASH1_ReproMesh2" position={[0, 0.43, 0]}>
                        <mesh name="MASH1_ReproMesh2_holo1_0" geometry={nodes.MASH1_ReproMesh2_holo1_0.geometry} material={materials.holo1} />
                      </group>
                      <mesh name="pPipe4_holo1_0" geometry={nodes.pPipe4_holo1_0.geometry} material={materials.holo1} />
                    </group>
                    <group name="pPipe2" position={[0, -0.58, 0]} rotation={[0, 0.31, 0]}>
                      <group name="MASH1_ReproMesh3" position={[0, 0.58, 0]} scale={[0.82, 0.8, 0.82]}>
                        <mesh name="MASH1_ReproMesh3_holo1_0" geometry={nodes.MASH1_ReproMesh3_holo1_0.geometry} material={materials.holo1} />
                      </group>
                      <group name="pPipe3" rotation={[0, 0.68, 0]} scale={0.86}>
                        <mesh name="pPipe3_holo1_0" geometry={nodes.pPipe3_holo1_0.geometry} material={materials.holo1} />
                      </group>
                      <mesh name="pPipe2_holo1_0" geometry={nodes.pPipe2_holo1_0.geometry} material={materials.holo1} />
                    </group>
                    <group name="pPipe1" rotation={[0, -0.31, 0]}>
                      <group name="MASH1_ReproMesh1" scale={[1.03, 1, 1.03]}>
                        <mesh name="MASH1_ReproMesh1_holo1_0" geometry={nodes.MASH1_ReproMesh1_holo1_0.geometry} material={materials.holo1} />
                      </group>
                      <mesh name="pPipe1_holo1_0" geometry={nodes.pPipe1_holo1_0.geometry} material={materials.holo1} />
                    </group>
                    <group name="pDisc1" position={[0, -0.39, 0]} scale={11.11}>
                      <mesh name="pDisc1_holo1_0" geometry={nodes.pDisc1_holo1_0.geometry} material={materials.holo1} />
                    </group>
                  </group>
                </group>
                <group name="Group">
                  <group name="Main">
                    <group name="DeformationSystem">
                      <group name="Object_159">
                        <primitive object={nodes._rootJoint} />
                        <skinnedMesh name="Object_162" geometry={nodes.Object_162.geometry} material={materials.material} skeleton={nodes.Object_162.skeleton} />
                        <skinnedMesh name="Object_164" geometry={nodes.Object_164.geometry} material={materials.material} skeleton={nodes.Object_164.skeleton} />
                        <skinnedMesh name="Object_166" geometry={nodes.Object_166.geometry} material={materials.material} skeleton={nodes.Object_166.skeleton} />
                        <skinnedMesh name="Object_168" geometry={nodes.Object_168.geometry} material={materials.material} skeleton={nodes.Object_168.skeleton} />
                        <skinnedMesh name="Object_170" geometry={nodes.Object_170.geometry} material={materials.material} skeleton={nodes.Object_170.skeleton} />
                        <skinnedMesh name="Object_172" geometry={nodes.Object_172.geometry} material={materials.material} skeleton={nodes.Object_172.skeleton} />
                        <skinnedMesh name="Object_174" geometry={nodes.Object_174.geometry} material={materials.material} skeleton={nodes.Object_174.skeleton} />
                        <skinnedMesh name="Object_176" geometry={nodes.Object_176.geometry} material={materials.material} skeleton={nodes.Object_176.skeleton} />
                        <skinnedMesh name="Object_178" geometry={nodes.Object_178.geometry} material={materials.material} skeleton={nodes.Object_178.skeleton} />
                        <skinnedMesh name="Object_180" geometry={nodes.Object_180.geometry} material={materials.material} skeleton={nodes.Object_180.skeleton} />
                        <skinnedMesh name="Object_182" geometry={nodes.Object_182.geometry} material={materials.material} skeleton={nodes.Object_182.skeleton} />
                        <skinnedMesh name="Object_184" geometry={nodes.Object_184.geometry} material={materials.material} skeleton={nodes.Object_184.skeleton} />
                        <skinnedMesh name="Object_186" geometry={nodes.Object_186.geometry} material={materials.material} skeleton={nodes.Object_186.skeleton} />
                        <skinnedMesh name="Object_188" geometry={nodes.Object_188.geometry} material={materials.material} skeleton={nodes.Object_188.skeleton} />
                        <skinnedMesh name="Object_190" geometry={nodes.Object_190.geometry} material={materials.material} skeleton={nodes.Object_190.skeleton} />
                        <skinnedMesh name="Object_192" geometry={nodes.Object_192.geometry} material={materials.material} skeleton={nodes.Object_192.skeleton} />
                        <skinnedMesh name="Object_194" geometry={nodes.Object_194.geometry} material={materials.material} skeleton={nodes.Object_194.skeleton} />
                        <skinnedMesh name="Object_196" geometry={nodes.Object_196.geometry} material={materials.material} skeleton={nodes.Object_196.skeleton} />
                        <skinnedMesh name="Object_198" geometry={nodes.Object_198.geometry} material={materials.material} skeleton={nodes.Object_198.skeleton} />
                        <skinnedMesh name="Object_200" geometry={nodes.Object_200.geometry} material={materials.material} skeleton={nodes.Object_200.skeleton} />
                        <skinnedMesh name="Object_202" geometry={nodes.Object_202.geometry} material={materials.material} skeleton={nodes.Object_202.skeleton} />
                        <skinnedMesh name="Object_204" geometry={nodes.Object_204.geometry} material={materials.material} skeleton={nodes.Object_204.skeleton} />
                        <skinnedMesh name="Object_206" geometry={nodes.Object_206.geometry} material={materials.material} skeleton={nodes.Object_206.skeleton} />
                        <skinnedMesh name="Object_208" geometry={nodes.Object_208.geometry} material={materials.material} skeleton={nodes.Object_208.skeleton} />
                        <skinnedMesh name="Object_210" geometry={nodes.Object_210.geometry} material={materials.material} skeleton={nodes.Object_210.skeleton} />
                        <skinnedMesh name="Object_212" geometry={nodes.Object_212.geometry} material={materials.material} skeleton={nodes.Object_212.skeleton} />
                        <skinnedMesh name="Object_214" geometry={nodes.Object_214.geometry} material={materials.material} skeleton={nodes.Object_214.skeleton} />
                        <skinnedMesh name="Object_216" geometry={nodes.Object_216.geometry} material={materials.material} skeleton={nodes.Object_216.skeleton} />
                        <skinnedMesh name="Object_218" geometry={nodes.Object_218.geometry} material={materials.material} skeleton={nodes.Object_218.skeleton} />
                        <skinnedMesh name="Object_220" geometry={nodes.Object_220.geometry} material={materials.material} skeleton={nodes.Object_220.skeleton} />
                        <skinnedMesh name="Object_222" geometry={nodes.Object_222.geometry} material={materials.material} skeleton={nodes.Object_222.skeleton} />
                        <skinnedMesh name="Object_224" geometry={nodes.Object_224.geometry} material={materials.material} skeleton={nodes.Object_224.skeleton} />
                        <skinnedMesh name="Object_226" geometry={nodes.Object_226.geometry} material={materials.material} skeleton={nodes.Object_226.skeleton} />
                        <skinnedMesh name="Object_228" geometry={nodes.Object_228.geometry} material={materials.material} skeleton={nodes.Object_228.skeleton} />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./public/robot-transformed.glb')
