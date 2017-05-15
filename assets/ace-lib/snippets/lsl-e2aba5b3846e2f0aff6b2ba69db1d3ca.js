ace.define("ace/snippets/lsl",["require","exports","module"],function(t,e,n){"use strict"
;e.snippetText="snippet @\n\t@${1:label};\nsnippet CAMERA_ACTIVE\n\tCAMERA_ACTIVE, ${1:integer isActive}, $0\nsnippet CAMERA_BEHINDNESS_ANGLE\n\tCAMERA_BEHINDNESS_ANGLE, ${1:float degrees}, $0\nsnippet CAMERA_BEHINDNESS_LAG\n\tCAMERA_BEHINDNESS_LAG, ${1:float seconds}, $0\nsnippet CAMERA_DISTANCE\n\tCAMERA_DISTANCE, ${1:float meters}, $0\nsnippet CAMERA_FOCUS\n\tCAMERA_FOCUS, ${1:vector position}, $0\nsnippet CAMERA_FOCUS_LAG\n\tCAMERA_FOCUS_LAG, ${1:float seconds}, $0\nsnippet CAMERA_FOCUS_LOCKED\n\tCAMERA_FOCUS_LOCKED, ${1:integer isLocked}, $0\nsnippet CAMERA_FOCUS_OFFSET\n\tCAMERA_FOCUS_OFFSET, ${1:vector meters}, $0\nsnippet CAMERA_FOCUS_THRESHOLD\n\tCAMERA_FOCUS_THRESHOLD, ${1:float meters}, $0\nsnippet CAMERA_PITCH\n\tCAMERA_PITCH, ${1:float degrees}, $0\nsnippet CAMERA_POSITION\n\tCAMERA_POSITION, ${1:vector position}, $0\nsnippet CAMERA_POSITION_LAG\n\tCAMERA_POSITION_LAG, ${1:float seconds}, $0\nsnippet CAMERA_POSITION_LOCKED\n\tCAMERA_POSITION_LOCKED, ${1:integer isLocked}, $0\nsnippet CAMERA_POSITION_THRESHOLD\n\tCAMERA_POSITION_THRESHOLD, ${1:float meters}, $0\nsnippet CHARACTER_AVOIDANCE_MODE\n\tCHARACTER_AVOIDANCE_MODE, ${1:integer flags}, $0\nsnippet CHARACTER_DESIRED_SPEED\n\tCHARACTER_DESIRED_SPEED, ${1:float speed}, $0\nsnippet CHARACTER_DESIRED_TURN_SPEED\n\tCHARACTER_DESIRED_TURN_SPEED, ${1:float speed}, $0\nsnippet CHARACTER_LENGTH\n\tCHARACTER_LENGTH, ${1:float length}, $0\nsnippet CHARACTER_MAX_TURN_RADIUS\n\tCHARACTER_MAX_TURN_RADIUS, ${1:float radius}, $0\nsnippet CHARACTER_ORIENTATION\n\tCHARACTER_ORIENTATION, ${1:integer orientation}, $0\nsnippet CHARACTER_RADIUS\n\tCHARACTER_RADIUS, ${1:float radius}, $0\nsnippet CHARACTER_STAY_WITHIN_PARCEL\n\tCHARACTER_STAY_WITHIN_PARCEL, ${1:boolean stay}, $0\nsnippet CHARACTER_TYPE\n\tCHARACTER_TYPE, ${1:integer type}, $0\nsnippet HTTP_BODY_MAXLENGTH\n\tHTTP_BODY_MAXLENGTH, ${1:integer length}, $0\nsnippet HTTP_CUSTOM_HEADER\n\tHTTP_CUSTOM_HEADER, ${1:string name}, ${2:string value}, $0\nsnippet HTTP_METHOD\n\tHTTP_METHOD, ${1:string method}, $0\nsnippet HTTP_MIMETYPE\n\tHTTP_MIMETYPE, ${1:string mimeType}, $0\nsnippet HTTP_PRAGMA_NO_CACHE\n\tHTTP_PRAGMA_NO_CACHE, ${1:integer send_header}, $0\nsnippet HTTP_VERBOSE_THROTTLE\n\tHTTP_VERBOSE_THROTTLE, ${1:integer noisy}, $0\nsnippet HTTP_VERIFY_CERT\n\tHTTP_VERIFY_CERT, ${1:integer verify}, $0\nsnippet RC_DATA_FLAGS\n\tRC_DATA_FLAGS, ${1:integer flags}, $0\nsnippet RC_DETECT_PHANTOM\n\tRC_DETECT_PHANTOM, ${1:integer dectedPhantom}, $0\nsnippet RC_MAX_HITS\n\tRC_MAX_HITS, ${1:integer maxHits}, $0\nsnippet RC_REJECT_TYPES\n\tRC_REJECT_TYPES, ${1:integer filterMask}, $0\nsnippet at_rot_target\n\tat_rot_target(${1:integer handle}, ${2:rotation targetrot}, ${3:rotation ourrot})\n\t{\n\t\t$0\n\t}\nsnippet at_target\n\tat_target(${1:integer tnum}, ${2:vector targetpos}, ${3:vector ourpos})\n\t{\n\t\t$0\n\t}\nsnippet attach\n\tattach(${1:key id})\n\t{\n\t\t$0\n\t}\nsnippet changed\n\tchanged(${1:integer change})\n\t{\n\t\t$0\n\t}\nsnippet collision\n\tcollision(${1:integer index})\n\t{\n\t\t$0\n\t}\nsnippet collision_end\n\tcollision_end(${1:integer index})\n\t{\n\t\t$0\n\t}\nsnippet collision_start\n\tcollision_start(${1:integer index})\n\t{\n\t\t$0\n\t}\nsnippet control\n\tcontrol(${1:key id}, ${2:integer level}, ${3:integer edge})\n\t{\n\t\t$0\n\t}\nsnippet dataserver\n\tdataserver(${1:key query_id}, ${2:string data})\n\t{\n\t\t$0\n\t}\nsnippet do\n\tdo\n\t{\n\t\t$0\n\t}\n\twhile (${1:condition});\nsnippet else\n\telse\n\t{\n\t\t$0\n\t}\nsnippet email\n\temail(${1:string time}, ${2:string address}, ${3:string subject}, ${4:string message}, ${5:integer num_left})\n\t{\n\t\t$0\n\t}\nsnippet experience_permissions\n\texperience_permissions(${1:key agent_id})\n\t{\n\t\t$0\n\t}\nsnippet experience_permissions_denied\n\texperience_permissions_denied(${1:key agent_id}, ${2:integer reason})\n\t{\n\t\t$0\n\t}\nsnippet for\n\tfor (${1:start}; ${3:condition}; ${3:step})\n\t{\n\t\t$0\n\t}\nsnippet http_request\n\thttp_request(${1:key request_id}, ${2:string method}, ${3:string body})\n\t{\n\t\t$0\n\t}\nsnippet http_response\n\thttp_response(${1:key request_id}, ${2:integer status}, ${3:list metadata}, ${4:string body})\n\t{\n\t\t$0\n\t}\nsnippet if\n\tif (${1:condition})\n\t{\n\t\t$0\n\t}\nsnippet jump\n\tjump ${1:label};\nsnippet land_collision\n\tland_collision(${1:vector pos})\n\t{\n\t\t$0\n\t}\nsnippet land_collision_end\n\tland_collision_end(${1:vector pos})\n\t{\n\t\t$0\n\t}\nsnippet land_collision_start\n\tland_collision_start(${1:vector pos})\n\t{\n\t\t$0\n\t}\nsnippet link_message\n\tlink_message(${1:integer sender_num}, ${2:integer num}, ${3:string str}, ${4:key id})\n\t{\n\t\t$0\n\t}\nsnippet listen\n\tlisten(${1:integer channel}, ${2:string name}, ${3:key id}, ${4:string message})\n\t{\n\t\t$0\n\t}\nsnippet llAbs\n\tllAbs(${1:integer val})\nsnippet llAcos\n\tllAcos(${1:float val})\nsnippet llAddToLandBanList\n\tllAddToLandBanList(${1:key agent}, ${2:float hours});\n\t$0\nsnippet llAddToLandPassList\n\tllAddToLandPassList(${1:key agent}, ${2:float hours});\n\t$0\nsnippet llAdjustSoundVolume\n\tllAdjustSoundVolume(${1:float volume});\n\t$0\nsnippet llAgentInExperience\n\tllAgentInExperience(${1:key agent})\nsnippet llAllowInventoryDrop\n\tllAllowInventoryDrop(${1:integer add});\n\t$0\nsnippet llAngleBetween\n\tllAngleBetween(${1:rotation a}, ${2:rotation b})\nsnippet llApplyImpulse\n\tllApplyImpulse(${1:vector force}, ${2:integer local});\n\t$0\nsnippet llApplyRotationalImpulse\n\tllApplyRotationalImpulse(${1:vector force}, ${2:integer local});\n\t$0\nsnippet llAsin\n\tllAsin(${1:float val})\nsnippet llAtan2\n\tllAtan2(${1:float y}, ${2:float x})\nsnippet llAttachToAvatar\n\tllAttachToAvatar(${1:integer attach_point});\n\t$0\nsnippet llAttachToAvatarTemp\n\tllAttachToAvatarTemp(${1:integer attach_point});\n\t$0\nsnippet llAvatarOnLinkSitTarget\n\tllAvatarOnLinkSitTarget(${1:integer link})\nsnippet llAvatarOnSitTarget\n\tllAvatarOnSitTarget()\nsnippet llAxes2Rot\n\tllAxes2Rot(${1:vector fwd}, ${2:vector left}, ${3:vector up})\nsnippet llAxisAngle2Rot\n\tllAxisAngle2Rot(${1:vector axis}, ${2:float angle})\nsnippet llBase64ToInteger\n\tllBase64ToInteger(${1:string str})\nsnippet llBase64ToString\n\tllBase64ToString(${1:string str})\nsnippet llBreakAllLinks\n\tllBreakAllLinks();\n\t$0\nsnippet llBreakLink\n\tllBreakLink(${1:integer link});\n\t$0\nsnippet llCastRay\n\tllCastRay(${1:vector start}, ${2:vector end}, ${3:list options});\n\t$0\nsnippet llCeil\n\tllCeil(${1:float val})\nsnippet llClearCameraParams\n\tllClearCameraParams();\n\t$0\nsnippet llClearLinkMedia\n\tllClearLinkMedia(${1:integer link}, ${2:integer face});\n\t$0\nsnippet llClearPrimMedia\n\tllClearPrimMedia(${1:integer face});\n\t$0\nsnippet llCloseRemoteDataChannel\n\tllCloseRemoteDataChannel(${1:key channel});\n\t$0\nsnippet llCollisionFilter\n\tllCollisionFilter(${1:string name}, ${2:key id}, ${3:integer accept});\n\t$0\nsnippet llCollisionSound\n\tllCollisionSound(${1:string impact_sound}, ${2:float impact_volume});\n\t$0\nsnippet llCos\n\tllCos(${1:float theta})\nsnippet llCreateCharacter\n\tllCreateCharacter(${1:list options});\n\t$0\nsnippet llCreateKeyValue\n\tllCreateKeyValue(${1:string k})\nsnippet llCreateLink\n\tllCreateLink(${1:key target}, ${2:integer parent});\n\t$0\nsnippet llCSV2List\n\tllCSV2List(${1:string src})\nsnippet llDataSizeKeyValue\n\tllDataSizeKeyValue()\nsnippet llDeleteCharacter\n\tllDeleteCharacter();\n\t$0\nsnippet llDeleteKeyValue\n\tllDeleteKeyValue(${1:string k})\nsnippet llDeleteSubList\n\tllDeleteSubList(${1:list src}, ${2:integer start}, ${3:integer end})\nsnippet llDeleteSubString\n\tllDeleteSubString(${1:string src}, ${2:integer start}, ${3:integer end})\nsnippet llDetachFromAvatar\n\tllDetachFromAvatar();\n\t$0\nsnippet llDetectedGrab\n\tllDetectedGrab(${1:integer number})\nsnippet llDetectedGroup\n\tllDetectedGroup(${1:integer number})\nsnippet llDetectedKey\n\tllDetectedKey(${1:integer number})\nsnippet llDetectedLinkNumber\n\tllDetectedLinkNumber(${1:integer number})\nsnippet llDetectedName\n\tllDetectedName(${1:integer number})\nsnippet llDetectedOwner\n\tllDetectedOwner(${1:integer number})\nsnippet llDetectedPos\n\tllDetectedPosl(${1:integer number})\nsnippet llDetectedRot\n\tllDetectedRot(${1:integer number})\nsnippet llDetectedTouchBinormal\n\tllDetectedTouchBinormal(${1:integer number})\nsnippet llDetectedTouchFace\n\tllDetectedTouchFace(${1:integer number})\nsnippet llDetectedTouchNormal\n\tllDetectedTouchNormal(${1:integer number})\nsnippet llDetectedTouchPos\n\tllDetectedTouchPos(${1:integer number})\nsnippet llDetectedTouchST\n\tllDetectedTouchST(${1:integer number})\nsnippet llDetectedTouchUV\n\tllDetectedTouchUV(${1:integer number})\nsnippet llDetectedType\n\tllDetectedType(${1:integer number})\nsnippet llDetectedVel\n\tllDetectedVel(${1:integer number})\nsnippet llDialog\n\tllDialog(${1:key agent}, ${2:string message}, ${3:list buttons}, ${4:integer channel});\n\t$0\nsnippet llDie\n\tllDie();\n\t$0\nsnippet llDumpList2String\n\tllDumpList2String(${1:list src}, ${2:string separator})\nsnippet llEdgeOfWorld\n\tllEdgeOfWorld(${1:vector pos}, ${2:vector dir})\nsnippet llEjectFromLand\n\tllEjectFromLand(${1:key agent});\n\t$0\nsnippet llEmail\n\tllEmail(${1:string address}, ${2:string subject}, ${3:string message});\n\t$0\nsnippet llEscapeURL\n\tllEscapeURL(${1:string url})\nsnippet llEuler2Rot\n\tllEuler2Rot(${1:vector v})\nsnippet llExecCharacterCmd\n\tllExecCharacterCmd(${1:integer command}, ${2:list options});\n\t$0\nsnippet llEvade\n\tllEvade(${1:key target}, ${2:list options});\n\t$0\nsnippet llFabs\n\tllFabs(${1:float val})\nsnippet llFleeFrom\n\tllFleeFrom(${1:vector position}, ${2:float distance}, ${3:list options});\n\t$0\nsnippet llFloor\n\tllFloor(${1:float val})\nsnippet llForceMouselook\n\tllForceMouselook(${1:integer mouselook});\n\t$0\nsnippet llFrand\n\tllFrand(${1:float mag})\nsnippet llGenerateKey\n\tllGenerateKey()\nsnippet llGetAccel\n\tllGetAccel()\nsnippet llGetAgentInfo\n\tllGetAgentInfo(${1:key id})\nsnippet llGetAgentLanguage\n\tllGetAgentLanguage(${1:key agent})\nsnippet llGetAgentList\n\tllGetAgentList(${1:integer scope}, ${2:list options})\nsnippet llGetAgentSize\n\tllGetAgentSize(${1:key agent})\nsnippet llGetAlpha\n\tllGetAlpha(${1:integer face})\nsnippet llGetAndResetTime\n\tllGetAndResetTime()\nsnippet llGetAnimation\n\tllGetAnimation(${1:key id})\nsnippet llGetAnimationList\n\tllGetAnimationList(${1:key agent})\nsnippet llGetAnimationOverride\n\tllGetAnimationOverride(${1:string anim_state})\nsnippet llGetAttached\n\tllGetAttached()\nsnippet llGetAttachedList\n\tllGetAttachedList(${1:key id})\nsnippet llGetBoundingBox\n\tllGetBoundingBox(${1:key object})\nsnippet llGetCameraPos\n\tllGetCameraPos()\nsnippet llGetCameraRot\n\tllGetCameraRot()\nsnippet llGetCenterOfMass\n\tllGetCenterOfMass()\nsnippet llGetClosestNavPoint\n\tllGetClosestNavPoint(${1:vector point}, ${2:list options})\nsnippet llGetColor\n\tllGetColor(${1:integer face})\nsnippet llGetCreator\n\tllGetCreator()\nsnippet llGetDate\n\tllGetDate()\nsnippet llGetDisplayName\n\tllGetDisplayName(${1:key id})\nsnippet llGetEnergy\n\tllGetEnergy()\nsnippet llGetEnv\n\tllGetEnv(${1:string name})\nsnippet llGetExperienceDetails\n\tllGetExperienceDetails(${1:key experience_id})\nsnippet llGetExperienceErrorMessage\n\tllGetExperienceErrorMessage(${1:integer error})\nsnippet llGetForce\n\tllGetForce()\nsnippet llGetFreeMemory\n\tllGetFreeMemory()\nsnippet llGetFreeURLs\n\tllGetFreeURLs()\nsnippet llGetGeometricCenter\n\tllGetGeometricCenter()\nsnippet llGetGMTclock\n\tllGetGMTclock()\nsnippet llGetHTTPHeader\n\tllGetHTTPHeader(${1:key request_id}, ${2:string header})\nsnippet llGetInventoryCreator\n\tllGetInventoryCreator(${1:string item})\nsnippet llGetInventoryKey\n\tllGetInventoryKey(${1:string name})\nsnippet llGetInventoryName\n\tllGetInventoryName(${1:integer type}, ${2:integer number})\nsnippet llGetInventoryNumber\n\tllGetInventoryNumber(${1:integer type})\nsnippet llGetInventoryPermMask\n\tllGetInventoryPermMask(${1:string item}, ${2:integer mask})\nsnippet llGetInventoryType\n\tllGetInventoryType(${1:string name})\nsnippet llGetKey\n\tllGetKey()\nsnippet llGetLandOwnerAt\n\tllGetLandOwnerAt(${1:vector pos})\nsnippet llGetLinkKey\n\tllGetLinkKey(${1:integer link})\nsnippet llGetLinkMedia\n\tllGetLinkMedia(${1:integer link}, ${2:integer face}, ${3:list params})\nsnippet llGetLinkName\n\tllGetLinkName(${1:integer link})\nsnippet llGetLinkNumber\n\tllGetLinkNumber()\nsnippet llGetLinkNumberOfSides\n\tllGetLinkNumberOfSides(${1:integer link})\nsnippet llGetLinkPrimitiveParams\n\tllGetLinkPrimitiveParams(${1:integer link}, ${2:list params})\nsnippet llGetListEntryType\n\tllGetListEntryType(${1:list src}, ${2:integer index})\nsnippet llGetListLength\n\tllGetListLength(${1:list src})\nsnippet llGetLocalPos\n\tllGetLocalPos()\nsnippet llGetLocalRot\n\tllGetLocalRot()\nsnippet llGetMass\n\tllGetMass()\nsnippet llGetMassMKS\n\tllGetMassMKS()\nsnippet llGetMaxScaleFactor\n\tllGetMaxScaleFactor()\nsnippet llGetMemoryLimit\n\tllGetMemoryLimit()\nsnippet llGetMinScaleFactor\n\tllGetMinScaleFactor()\nsnippet llGetNextEmail\n\tllGetNextEmail(${1:string address}, ${2:string subject});\n\t$0\nsnippet llGetNotecardLine\n\tllGetNotecardLine(${1:string name}, ${2:integer line})\nsnippet llGetNumberOfNotecardLines\n\tllGetNumberOfNotecardLines(${1:string name})\nsnippet llGetNumberOfPrims\n\tllGetNumberOfPrims()\nsnippet llGetNumberOfSides\n\tllGetNumberOfSides()\nsnippet llGetObjectDesc\n\tllGetObjectDesc()\nsnippet llGetObjectDetails\n\tllGetObjectDetails(${1:key id}, ${2:list params})\nsnippet llGetObjectMass\n\tllGetObjectMass(${1:key id})\nsnippet llGetObjectName\n\tllGetObjectName()\nsnippet llGetObjectPermMask\n\tllGetObjectPermMask(${1:integer mask})\nsnippet llGetObjectPrimCount\n\tllGetObjectPrimCount(${1:key prim})\nsnippet llGetOmega\n\tllGetOmega()\nsnippet llGetOwner\n\tllGetOwner()\nsnippet llGetOwnerKey\n\tllGetOwnerKey(${1:key id})\nsnippet llGetParcelDetails\n\tllGetParcelDetails(${1:vector pos}, ${2:list params})\nsnippet llGetParcelFlags\n\tllGetParcelFlags(${1:vector pos})\nsnippet llGetParcelMaxPrims\n\tllGetParcelMaxPrims(${1:vector pos}, ${2:integer sim_wide})\nsnippet llGetParcelMusicURL\n\tllGetParcelMusicURL()\nsnippet llGetParcelPrimCount\n\tllGetParcelPrimCount(${1:vector pos}, ${2:integer category}, ${3:integer sim_wide})\nsnippet llGetParcelPrimOwners\n\tllGetParcelPrimOwners(${1:vector pos})\nsnippet llGetPermissions\n\tllGetPermissions()\nsnippet llGetPermissionsKey\n\tllGetPermissionsKey()\nsnippet llGetPhysicsMaterial\n\tllGetPhysicsMaterial()\nsnippet llGetPos\n\tllGetPos()\nsnippet llGetPrimitiveParams\n\tllGetPrimitiveParams(${1:list params})\nsnippet llGetPrimMediaParams\n\tllGetPrimMediaParams(${1:integer face}, ${2:list params})\nsnippet llGetRegionAgentCount\n\tllGetRegionAgentCount()\nsnippet llGetRegionCorner\n\tllGetRegionCorner()\nsnippet llGetRegionFlags\n\tllGetRegionFlags()\nsnippet llGetRegionFPS\n\tllGetRegionFPS()\nsnippet llGetRegionName\n\tllGetRegionName()\nsnippet llGetRegionTimeDilation\n\tllGetRegionTimeDilation()\nsnippet llGetRootPosition\n\tllGetRootPosition()\nsnippet llGetRootRotation\n\tllGetRootRotation()\nsnippet llGetRot\n\tllGetRot()\nsnippet llGetScale\n\tllGetScale()\nsnippet llGetScriptName\n\tllGetScriptName()\nsnippet llGetScriptState\n\tllGetScriptState(${1:string script})\nsnippet llGetSimStats\n\tllGetSimStats(${1:integer stat_type})\nsnippet llGetSimulatorHostname\n\tllGetSimulatorHostname()\nsnippet llGetSPMaxMemory\n\tllGetSPMaxMemory()\nsnippet llGetStartParameter\n\tllGetStartParameter()\nsnippet llGetStaticPath\n\tllGetStaticPath(${1:vector start}, ${2:vector end}, ${3:float radius}, ${4:list params})\nsnippet llGetStatus\n\tllGetStatus(${1:integer status})\nsnippet llGetSubString\n\tllGetSubString(${1:string src}, ${2:integer start}, ${3:integer end})\nsnippet llGetSunDirection\n\tllGetSunDirection()\nsnippet llGetTexture\n\tllGetTexture(${1:integer face})\nsnippet llGetTextureOffset\n\tllGetTextureOffset(${1:integer face})\nsnippet llGetTextureRot\n\tllGetTextureRot(${1:integer face})\nsnippet llGetTextureScale\n\tllGetTextureScale(${1:integer face})\nsnippet llGetTime\n\tllGetTime()\nsnippet llGetTimeOfDay\n\tllGetTimeOfDay()\nsnippet llGetTimestamp\n\tllGetTimestamp()\nsnippet llGetTorque\n\tllGetTorque()\nsnippet llGetUnixTime\n\tllGetUnixTime()\nsnippet llGetUsedMemory\n\tllGetUsedMemory()\nsnippet llGetUsername\n\tllGetUsername(${1:key id})\nsnippet llGetVel\n\tllGetVel()\nsnippet llGetWallclock\n\tllGetWallclock()\nsnippet llGiveInventory\n\tllGiveInventory(${1:key destination}, ${2:string inventory});\n\t$0\nsnippet llGiveInventoryList\n\tllGiveInventoryList(${1:key target}, ${2:string folder}, ${3:list inventory});\n\t$0\nsnippet llGiveMoney\n\tllGiveMoney(${1:key destination}, ${2:integer amount})\nsnippet llGround\n\tllGround(${1:vector offset})\nsnippet llGroundContour\n\tllGroundContour(${1:vector offset})\nsnippet llGroundNormal\n\tllGroundNormal(${1:vector offset})\nsnippet llGroundRepel\n\tllGroundRepel(${1:float height}, ${2:integer water}, ${3:float tau});\n\t$0\nsnippet llGroundSlope\n\tllGroundSlope(${1:vector offset})\nsnippet llHTTPRequest\n\tllHTTPRequest(${1:string url}, ${2:list parameters}, ${3:string body})\nsnippet llHTTPResponse\n\tllHTTPResponse(${1:key request_id}, ${2:integer status}, ${3:string body});\n\t$0\nsnippet llInsertString\n\tllInsertString(${1:string dst}, ${2:integer pos}, ${3:string src})\nsnippet llInstantMessage\n\tllInstantMessage(${1:key user}, ${2:string message});\n\t$0\nsnippet llIntegerToBase64\n\tllIntegerToBase64(${1:integer number})\nsnippet llJson2List\n\tllJson2List(${1:string json})\nsnippet llJsonGetValue\n\tllJsonGetValue(${1:string json}, ${2:list specifiers})\nsnippet llJsonSetValue\n\tllJsonSetValue(${1:string json}, ${2:list specifiers}, ${3:string newValue})\nsnippet llJsonValueType\n\tllJsonValueType(${1:string json}, ${2:list specifiers})\nsnippet llKey2Name\n\tllKey2Name(${1:key id})\nsnippet llKeyCountKeyValue\n\tllKeyCountKeyValue()\nsnippet llKeysKeyValue\n\tllKeysKeyValue(${1:integer first}, ${2:integer count})\nsnippet llLinkParticleSystem\n\tllLinkParticleSystem(${1:integer link}, ${2:list rules});\n\t$0\nsnippet llLinkSitTarget\n\tllLinkSitTarget(${1:integer link}, ${2:vector offset}, ${3:rotation rot});\n\t$0\nsnippet llList2CSV\n\tllList2CSV(${1:list src})\nsnippet llList2Float\n\tllList2Float(${1:list src}, ${2:integer index})\nsnippet llList2Integer\n\tllList2Integer(${1:list src}, ${2:integer index})\nsnippet llList2Json\n\tllList2Json(${1:string type}, ${2:list values})\nsnippet llList2Key\n\tllList2Key(${1:list src}, ${2:integer index})\nsnippet llList2List\n\tllList2List(${1:list src}, ${2:integer start}, ${3:integer end})\nsnippet llList2ListStrided\n\tllList2ListStrided(${1:list src}, ${2:integer start}, ${3:integer end}, ${4:integer stride})\nsnippet llList2Rot\n\tllList2Rot(${1:list src}, ${2:integer index})\nsnippet llList2String\n\tllList2String(${1:list src}, ${2:integer index})\nsnippet llList2Vector\n\tllList2Vector(${1:list src}, ${2:integer index})\nsnippet llListen\n\tllListen(${1:integer channel}, ${2:string name}, ${3:key id}, ${4:string msg})\nsnippet llListenControl\n\tllListenControl(${1:integer handle}, ${2:integer active});\n\t$0\nsnippet llListenRemove\n\tllListenRemove(${1:integer handle});\n\t$0\nsnippet llListFindList\n\tllListFindList(${1:list src}, ${2:list test})\nsnippet llListInsertList\n\tllListInsertList(${1:list dest}, ${2:list src}, ${3:integer start})\nsnippet llListRandomize\n\tllListRandomize(${1:list src}, ${2:integer stride})\nsnippet llListReplaceList\n\tllListReplaceList(${1:list dest}, ${2:list src}, ${3:integer start}, ${4:integer end})\nsnippet llListSort\n\tllListSort(${1:list src}, ${2:integer stride}, ${3:integer ascending})\nsnippet llListStatistics\n\tllListStatistics(${1:integer operation}, ${2:list src})\nsnippet llLoadURL\n\tllLoadURL(${1:key agent}, ${2:string message}, ${3:string url});\n\t$0\nsnippet llLog\n\tllLog(${1:float val})\nsnippet llLog10\n\tllLog10(${1:float val})\nsnippet llLookAt\n\tllLookAt(${1:vector target}, ${2:float strength}, ${3:float damping});\n\t$0\nsnippet llLoopSound\n\tllLoopSound(${1:string sound}, ${2:float volume});\n\t$0\nsnippet llLoopSoundMaster\n\tllLoopSoundMaster(${1:string sound}, ${2:float volume});\n\t$0\nsnippet llLoopSoundSlave\n\tllLoopSoundSlave(${1:string sound}, ${2:float volume});\n\t$0\nsnippet llManageEstateAccess\n\tllManageEstateAccess(${1:integer action}, ${2:key agent})\nsnippet llMapDestination\n\tllMapDestination(${1:string simname}, ${2:vector pos}, ${3:vector look_at});\n\t$0\nsnippet llMD5String\n\tllMD5String(${1:string src}, ${2:integer nonce})\nsnippet llMessageLinked\n\tllMessageLinked(${1:integer link}, ${2:integer num}, ${3:string str}, ${4:key id});\n\t$0\nsnippet llMinEventDelay\n\tllMinEventDelay(${1:float delay});\n\t$0\nsnippet llModifyLand\n\tllModifyLand(${1:integer action}, ${2:integer brush});\n\t$0\nsnippet llModPow\n\tllModPow(${1:integer a}, ${2:integer b}, ${3:integer c})\nsnippet llMoveToTarget\n\tllMoveToTarget(${1:vector target}, ${2:float tau});\n\t$0\nsnippet llNavigateTo\n\tllNavigateTo(${1:vector pos}, ${2:list options});\n\t$0\nsnippet llOffsetTexture\n\tllOffsetTexture(${1:float u}, ${2:float v}, ${3:integer face});\n\t$0\nsnippet llOpenRemoteDataChannel\n\tllOpenRemoteDataChannel();\n\t$0\nsnippet llOverMyLand\n\tllOverMyLand(${1:key id})\nsnippet llOwnerSay\n\tllOwnerSay(${1:string msg});\n\t$0\nsnippet llParcelMediaCommandList\n\tllParcelMediaCommandList(${1:list commandList});\n\t$0\nsnippet llParcelMediaQuery\n\tllParcelMediaQuery(${1:list query})\nsnippet llParseString2List\n\tllParseString2List(${1:string src}, ${2:list separators}, ${3:list spacers})\nsnippet llParseStringKeepNulls\n\tllParseStringKeepNulls(${1:string src}, ${2:list separators}, ${3:list spacers})\nsnippet llParticleSystem\n\tllParticleSystem(${1:list rules});\n\t$0\nsnippet llPassCollisions\n\tllPassCollisions(${1:integer pass});\n\t$0\nsnippet llPassTouches\n\tllPassTouches(${1:integer pass});\n\t$0\nsnippet llPatrolPoints\n\tllPatrolPoints(${1:list patrolPoints}, ${2:list options});\n\t$0\nsnippet llPlaySound\n\tllPlaySound(${1:string sound}, ${2:float volume});\n\t$0\nsnippet llPlaySoundSlave\n\tllPlaySoundSlave(${1:string sound}, ${2:float volume});\n\t$0\nsnippet llPow\n\tllPow(${1:float base}, ${2:float exponent})\nsnippet llPreloadSound\n\tllPreloadSound(${1:string sound});\n\t$0\nsnippet llPursue\n\tllPursue(${1:key target}, ${2:list options});\n\t$0\nsnippet llPushObject\n\tllPushObject(${1:key target}, ${2:vector impulse}, ${3:vector ang_impulse}, ${4:integer local});\n\t$0\nsnippet llReadKeyValue\n\tllReadKeyValue(${1:string k})\nsnippet llRegionSay\n\tllRegionSay(${1:integer channel}, ${2:string msg});\n\t$0\nsnippet llRegionSayTo\n\tllRegionSayTo(${1:key target}, ${2:integer channel}, ${3:string msg});\n\t$0\nsnippet llReleaseControls\n\tllReleaseControls();\n\t$0\nsnippet llReleaseURL\n\tllReleaseURL(${1:string url});\n\t$0\nsnippet llRemoteDataReply\n\tllRemoteDataReply(${1:key channel}, ${2:key message_id}, ${3:string sdata}, ${4:integer idata});\n\t$0\nsnippet llRemoteLoadScriptPin\n\tllRemoteLoadScriptPin(${1:key target}, ${2:string name}, ${3:integer pin}, ${4:integer running}, ${5:integer start_param});\n\t$0\nsnippet llRemoveFromLandBanList\n\tllRemoveFromLandBanList(${1:key agent});\n\t$0\nsnippet llRemoveFromLandPassList\n\tllRemoveFromLandPassList(${1:key agent});\n\t$0\nsnippet llRemoveInventory\n\tllRemoveInventory(${1:string item});\n\t$0\nsnippet llRemoveVehicleFlags\n\tllRemoveVehicleFlags(${1:integer flags});\n\t$0\nsnippet llRequestAgentData\n\tllRequestAgentData(${1:key id}, ${2:integer data})\nsnippet llRequestDisplayName\n\tllRequestDisplayName(${1:key id})\nsnippet llRequestExperiencePermissions\n\tllRequestExperiencePermissions(${1:key agent}, ${2:string name})\nsnippet llRequestInventoryData\n\tllRequestInventoryData(${1:string name})\nsnippet llRequestPermissions\n\tllRequestPermissions(${1:key agent}, ${2:integer permissions})\nsnippet llRequestSecureURL\n\tllRequestSecureURL()\nsnippet llRequestSimulatorData\n\tllRequestSimulatorData(${1:string region}, ${2:integer data})\nsnippet llRequestURL\n\tllRequestURL()\nsnippet llRequestUsername\n\tllRequestUsername(${1:key id})\nsnippet llResetAnimationOverride\n\tllResetAnimationOverride(${1:string anim_state});\n\t$0\nsnippet llResetLandBanList\n\tllResetLandBanList();\n\t$0\nsnippet llResetLandPassList\n\tllResetLandPassList();\n\t$0\nsnippet llResetOtherScript\n\tllResetOtherScript(${1:string name});\n\t$0\nsnippet llResetScript\n\tllResetScript();\n\t$0\nsnippet llResetTime\n\tllResetTime();\n\t$0\nsnippet llReturnObjectsByID\n\tllReturnObjectsByID(${1:list objects})\nsnippet llReturnObjectsByOwner\n\tllReturnObjectsByOwner(${1:key owner}, ${2:integer scope})\nsnippet llRezAtRoot\n\tllRezAtRoot(${1:string inventory}, ${2:vector position}, ${3:vector velocity}, ${4:rotation rot}, ${5:integer param});\n\t$0\nsnippet llRezObject\n\tllRezObject(${1:string inventory}, ${2:vector pos}, ${3:vector vel}, ${4:rotation rot}, ${5:integer param});\n\t$0\nsnippet llRot2Angle\n\tllRot2Angle(${1:rotation rot})\nsnippet llRot2Axis\n\tllRot2Axis(${1:rotation rot})\nsnippet llRot2Euler\n\tllRot2Euler(${1:rotation quat})\nsnippet llRot2Fwd\n\tllRot2Fwd(${1:rotation q})\nsnippet llRot2Left\n\tllRot2Left(${1:rotation q})\nsnippet llRot2Up\n\tllRot2Up(${1:rotation q})\nsnippet llRotateTexture\n\tllRotateTexture(${1:float angle}, ${2:integer face});\n\t$0\nsnippet llRotBetween\n\tllRotBetween(${1:vector start}, ${2:vector end})\nsnippet llRotLookAt\n\tllRotLookAt(${1:rotation target_direction}, ${2:float strength}, ${3:float damping});\n\t$0\nsnippet llRotTarget\n\tllRotTarget(${1:rotation rot}, ${2:float error})\nsnippet llRotTargetRemove\n\tllRotTargetRemove(${1:integer handle});\n\t$0\nsnippet llRound\n\tllRound(${1:float val})\nsnippet llSameGroup\n\tllSameGroup(${1:key group})\nsnippet llSay\n\tllSay(${1:integer channel}, ${2:string msg});\n\t$0\nsnippet llScaleByFactor\n\tllScaleByFactor(${1:float scaling_factor})\nsnippet llScaleTexture\n\tllScaleTexture(${1:float u}, ${2:float v}, ${3:integer face});\n\t$0\nsnippet llScriptDanger\n\tllScriptDanger(${1:vector pos})\nsnippet llScriptProfiler\n\tllScriptProfiler(${1:integer flags});\n\t$0\nsnippet llSendRemoteData\n\tllSendRemoteData(${1:key channel}, ${2:string dest}, ${3:integer idata}, ${4:string sdata})\nsnippet llSensor\n\tllSensor(${1:string name}, ${2:key id}, ${3:integer type}, ${4:float range}, ${5:float arc});\n\t$0\nsnippet llSensorRepeat\n\tllSensorRepeat(${1:string name}, ${2:key id}, ${3:integer type}, ${4:float range}, ${5:float arc}, ${6:float rate});\n\t$0\nsnippet llSetAlpha\n\tllSetAlpha(${1:float alpha}, ${2:integer face});\n\t$0\nsnippet llSetAngularVelocity\n\tllSetAngularVelocity(${1:vector force}, ${2:integer local});\n\t$0\nsnippet llSetAnimationOverride\n\tllSetAnimationOverride(${1:string anim_state}, ${2:string anim})\nsnippet llSetBuoyancy\n\tllSetBuoyancy(${1:float buoyancy});\n\t$0\nsnippet llSetCameraAtOffset\n\tllSetCameraAtOffset(${1:vector offset});\n\t$0\nsnippet llSetCameraEyeOffset\n\tllSetCameraEyeOffset(${1:vector offset});\n\t$0\nsnippet llSetCameraParams\n\tllSetCameraParams(${1:list rules});\n\t$0\nsnippet llSetClickAction\n\tllSetClickAction(${1:integer action});\n\t$0\nsnippet llSetColor\n\tllSetColor(${1:vector color}, ${2:integer face});\n\t$0\nsnippet llSetContentType\n\tllSetContentType(${1:key request_id}, ${2:integer content_type});\n\t$0\nsnippet llSetDamage\n\tllSetDamage(${1:float damage});\n\t$0\nsnippet llSetForce\n\tllSetForce(${1:vector force}, ${2:integer local});\n\t$0\nsnippet llSetForceAndTorque\n\tllSetForceAndTorque(${1:vector force}, ${2:vector torque}, ${3:integer local});\n\t$0\nsnippet llSetHoverHeight\n\tllSetHoverHeight(${1:float height}, ${2:integer water}, ${3:float tau});\n\t$0\nsnippet llSetKeyframedMotion\n\tllSetKeyframedMotion(${1:list keyframes}, ${2:list options});\n\t$0\nsnippet llSetLinkAlpha\n\tllSetLinkAlpha(${1:integer link}, ${2:float alpha}, ${3:integer face});\n\t$0\nsnippet llSetLinkCamera\n\tllSetLinkCamera(${1:integer link}, ${2:vector eye}, ${3:vector at});\n\t$0\nsnippet llSetLinkColor\n\tllSetLinkColor(${1:integer link}, ${2:vector color}, ${3:integer face});\n\t$0\nsnippet llSetLinkMedia\n\tllSetLinkMedia(${1:integer link}, ${2:integer face}, ${3:list params});\n\t$0\nsnippet llSetLinkPrimitiveParams\n\tllSetLinkPrimitiveParams(${1:integer link}, ${2:list rules});\n\t$0\nsnippet llSetLinkPrimitiveParamsFast\n\tllSetLinkPrimitiveParamsFast(${1:integer link}, ${2:list rules});\n\t$0\nsnippet llSetLinkTexture\n\tllSetLinkTexture(${1:integer link}, ${2:string texture}, ${3:integer face});\n\t$0\nsnippet llSetLinkTextureAnim\n\tllSetLinkTextureAnim(${1:integer link}, ${2:integer mode}, ${3:integer face}, ${4:integer sizex}, ${5:integer sizey}, ${6:float start}, ${7:float length}, ${8:float rate});\n\t$0\nsnippet llSetLocalRot\n\tllSetLocalRot(${1:rotation rot});\n\t$0\nsnippet llSetMemoryLimit\n\tllSetMemoryLimit(${1:integer limit})\nsnippet llSetObjectDesc\n\tllSetObjectDesc(${1:string description});\n\t$0\nsnippet llSetObjectName\n\tllSetObjectName(${1:string name});\n\t$0\nsnippet llSetParcelMusicURL\n\tllSetParcelMusicURL(${1:string url});\n\t$0\nsnippet llSetPayPrice\n\tllSetPayPrice(${1:integer price}, [${2:integer price_button_a}, ${3:integer price_button_b}, ${4:integer price_button_c}, ${5:integer price_button_d}]);\n\t$0\nsnippet llSetPhysicsMaterial\n\tllSetPhysicsMaterial(${1:integer mask}, ${2:float gravity_multiplier}, ${3:float restitution}, ${4:float friction}, ${5:float density});\n\t$0\nsnippet llSetPos\n\tllSetPos(${1:vector pos});\n\t$0\nsnippet llSetPrimitiveParams\n\tllSetPrimitiveParams(${1:list rules});\n\t$0\nsnippet llSetPrimMediaParams\n\tllSetPrimMediaParams(${1:integer face}, ${2:list params});\n\t$0\nsnippet llSetRegionPos\n\tllSetRegionPos(${1:vector position})\nsnippet llSetRemoteScriptAccessPin\n\tllSetRemoteScriptAccessPin(${1:integer pin});\n\t$0\nsnippet llSetRot\n\tllSetRot(${1:rotation rot});\n\t$0\nsnippet llSetScale\n\tllSetScale(${1:vector size});\n\t$0\nsnippet llSetScriptState\n\tllSetScriptState(${1:string name}, ${2:integer run});\n\t$0\nsnippet llSetSitText\n\tllSetSitText(${1:string text});\n\t$0\nsnippet llSetSoundQueueing\n\tllSetSoundQueueing(${1:integer queue});\n\t$0\nsnippet llSetSoundRadius\n\tllSetSoundRadius(${1:float radius});\n\t$0\nsnippet llSetStatus\n\tllSetStatus(${1:integer status}, ${2:integer value});\n\t$0\nsnippet llSetText\n\tllSetText(${1:string text}, ${2:vector color}, ${3:float alpha});\n\t$0\nsnippet llSetTexture\n\tllSetTexture(${1:string texture}, ${2:integer face});\n\t$0\nsnippet llSetTextureAnim\n\tllSetTextureAnim(${1:integer mode}, ${2:integer face}, ${3:integer sizex}, ${4:integer sizey}, ${5:float start}, ${6:float length}, ${7:float rate});\n\t$0\nsnippet llSetTimerEvent\n\tllSetTimerEvent(${1:float sec});\n\t$0\nsnippet llSetTorque\n\tllSetTorque(${1:vector torque}, ${2:integer local});\n\t$0\nsnippet llSetTouchText\n\tllSetTouchText(${1:string text});\n\t$0\nsnippet llSetVehicleFlags\n\tllSetVehicleFlags(${1:integer flags});\n\t$0\nsnippet llSetVehicleFloatParam\n\tllSetVehicleFloatParam(${1:integer param}, ${2:float value});\n\t$0\nsnippet llSetVehicleRotationParam\n\tllSetVehicleRotationParam(${1:integer param}, ${2:rotation rot});\n\t$0\nsnippet llSetVehicleType\n\tllSetVehicleType(${1:integer type});\n\t$0\nsnippet llSetVehicleVectorParam\n\tllSetVehicleVectorParam(${1:integer param}, ${2:vector vec});\n\t$0\nsnippet llSetVelocity\n\tllSetVelocity(${1:vector force}, ${2:integer local});\n\t$0\nsnippet llSHA1String\n\tllSHA1String(${1:string src})\nsnippet llShout\n\tllShout(${1:integer channel}, ${2:string msg});\n\t$0\nsnippet llSin\n\tllSin(${1:float theta})\nsnippet llSitTarget\n\tllSitTarget(${1:vector offset}, ${2:rotation rot});\n\t$0\nsnippet llSleep\n\tllSleep(${1:float sec});\n\t$0\nsnippet llSqrt\n\tllSqrt(${1:float val})\nsnippet llStartAnimation\n\tllStartAnimation(${1:string anim});\n\t$0\nsnippet llStopAnimation\n\tllStopAnimation(${1:string anim});\n\t$0\nsnippet llStopHover\n\tllStopHover();\n\t$0\nsnippet llStopLookAt\n\tllStopLookAt();\n\t$0\nsnippet llStopMoveToTarget\n\tllStopMoveToTarget();\n\t$0\nsnippet llStopSound\n\tllStopSound();\n\t$0\nsnippet llStringLength\n\tllStringLength(${1:string str})\nsnippet llStringToBase64\n\tllStringToBase64(${1:string str})\nsnippet llStringTrim\n\tllStringTrim(${1:string src}, ${2:integer type})\nsnippet llSubStringIndex\n\tllSubStringIndex(${1:string source}, ${2:string pattern})\nsnippet llTakeControls\n\tllTakeControls(${1:integer controls}, ${2:integer accept}, ${3:integer pass_on});\n\t$0\nsnippet llTan\n\tllTan(${1:float theta})\nsnippet llTarget\n\tllTarget(${1:vector position}, ${2:float range})\nsnippet llTargetOmega\n\tllTargetOmega(${1:vector axis}, ${2:float spinrate}, ${3:float gain});\n\t$0\nsnippet llTargetRemove\n\tllTargetRemove(${1:integer handle});\n\t$0\nsnippet llTeleportAgent\n\tllTeleportAgent(${1:key agent}, ${2:string landmark}, ${3:vector position}, ${4:vector look_at});\n\t$0\nsnippet llTeleportAgentGlobalCoords\n\tllTeleportAgentGlobalCoords(${1:key agent}, ${2:vector global_coordinates}, ${3:vector region_coordinates}, ${4:vector look_at});\n\t$0\nsnippet llTeleportAgentHome\n\tllTeleportAgentHome(${1:key agent});\n\t$0\nsnippet llTextBox\n\tllTextBox(${1:key agent}, ${2:string message}, ${3:integer channel});\n\t$0\nsnippet llToLower\n\tllToLower(${1:string src})\nsnippet llToUpper\n\tllToUpper(${1:string src})\nsnippet llTransferLindenDollars\n\tllTransferLindenDollars(${1:key destination}, ${2:integer amount})\nsnippet llTriggerSound\n\tllTriggerSound(${1:string sound}, ${2:float volume});\n\t$0\nsnippet llTriggerSoundLimited\n\tllTriggerSoundLimited(${1:string sound}, ${2:float volume}, ${3:vector top_north_east}, ${4:vector bottom_south_west});\n\t$0\nsnippet llUnescapeURL\n\tllUnescapeURL(${1:string url})\nsnippet llUnSit\n\tllUnSit(${1:key id});\n\t$0\nsnippet llUpdateCharacter\n\tllUpdateCharacter(${1:list options})\nsnippet llUpdateKeyValue\n\tllUpdateKeyValue(${1:string k}, ${2:string v}, ${3:integer checked}, ${4:string ov})\nsnippet llVecDist\n\tllVecDist(${1:vector vec_a}, ${2:vector vec_b})\nsnippet llVecMag\n\tllVecMag(${1:vector vec})\nsnippet llVecNorm\n\tllVecNorm(${1:vector vec})\nsnippet llVolumeDetect\n\tllVolumeDetect(${1:integer detect});\n\t$0\nsnippet llWanderWithin\n\tllWanderWithin(${1:vector origin}, ${2:vector dist}, ${3:list options});\n\t$0\nsnippet llWater\n\tllWater(${1:vector offset});\n\t$0\nsnippet llWhisper\n\tllWhisper(${1:integer channel}, ${2:string msg});\n\t$0\nsnippet llWind\n\tllWind(${1:vector offset});\n\t$0\nsnippet llXorBase64\n\tllXorBase64(${1:string str1}, ${2:string str2})\nsnippet money\n\tmoney(${1:key id}, ${2:integer amount})\n\t{\n\t\t$0\n\t}\nsnippet object_rez\n\tobject_rez(${1:key id})\n\t{\n\t\t$0\n\t}\nsnippet on_rez\n\ton_rez(${1:integer start_param})\n\t{\n\t\t$0\n\t}\nsnippet path_update\n\tpath_update(${1:integer type}, ${2:list reserved})\n\t{\n\t\t$0\n\t}\nsnippet remote_data\n\tremote_data(${1:integer event_type}, ${2:key channel}, ${3:key message_id}, ${4:string sender}, ${5:integer idata}, ${6:string sdata})\n\t{\n\t\t$0\n\t}\nsnippet run_time_permissions\n\trun_time_permissions(${1:integer perm})\n\t{\n\t\t$0\n\t}\nsnippet sensor\n\tsensor(${1:integer index})\n\t{\n\t\t$0\n\t}\nsnippet state\n\tstate ${1:name}\nsnippet touch\n\ttouch(${1:integer index})\n\t{\n\t\t$0\n\t}\nsnippet touch_end\n\ttouch_end(${1:integer index})\n\t{\n\t\t$0\n\t}\nsnippet touch_start\n\ttouch_start(${1:integer index})\n\t{\n\t\t$0\n\t}\nsnippet transaction_result\n\ttransaction_result(${1:key id}, ${2:integer success}, ${3:string data})\n\t{\n\t\t$0\n\t}\nsnippet while\n\twhile (${1:condition})\n\t{\n\t\t$0\n\t}\n",
e.scope="lsl"});