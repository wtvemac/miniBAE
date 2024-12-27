/*
    Copyright (c) 2009 Beatnik, Inc All rights reserved.
    
    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions are
    met:
    
    Redistributions of source code must retain the above copyright notice,
    this list of conditions and the following disclaimer.
    
    Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the
    documentation and/or other materials provided with the distribution.
    
    Neither the name of the Beatnik, Inc nor the names of its contributors
    may be used to endorse or promote products derived from this software
    without specific prior written permission.
    
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
    IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED
    TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
    PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
    HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
    SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
    TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
    PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
    LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
    NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
    SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
/*****************************************************************************/

/*
**  BAEBuildOptions_libwtv.h
**
**  © Copyright 1999 Beatnik, Inc, All Rights Reserved.
**
**  Beatnik products contain certain trade secrets and confidential and
**  proprietary information of Beatnik.  Use, reproduction, disclosure
**  and distribution by any means are prohibited, except pursuant to
**  a written license from Beatnik. Use of copyright notice is
**  precautionary and does not imply publication or disclosure.
**
**  Restricted Rights Legend:
**  Use, duplication, or disclosure by the Government is subject to
**  restrictions as set forth in subparagraph (c)(1)(ii) of The
**  Rights in Technical Data and Computer Software clause in DFARS
**  252.227-7013 or subparagraphs (c)(1) and (2) of the Commercial
**  Computer Software--Restricted Rights at 48 CFR 52.227-19, as
**  applicable.
**
*/
/*****************************************************************************/

#define COMPILER_TYPE                                           GCC_COMPILER

#define CPU_TYPE                                                kMIPS

#define X_WORD_ORDER                                            0

#define BAE_COMPLETE                                            1
#define USE_FLOAT                                               0
#define USE_8_BIT_OUTPUT                                        0
#define USE_16_BIT_OUTPUT                                       1
#define USE_MONO_OUTPUT                                         0
#define USE_STEREO_OUTPUT                                       1
#define SUPPORT_KARAOKE                                         0
#define SUPPORT_IGOR_FEATURE                                    1
#define EMAC_SUPPORT_DLS                                        1
#define USE_FULL_RMF_SUPPORT                                    1
#define USE_MPEG_ENCODER                                        0
#define USE_MPEG_DECODER                                        0
#define USE_CALLBACKS                                           0
#define USE_CREATION_API                                        1
#define USE_STREAM_API                                          1
#define USE_HIGHLEVEL_FILE_API                                  1
#define USE_STREAM_API                                          1
#define USE_CAPTURE_API                                         1
#define USE_MOD_API                                             0
#define USE_DEVICE_ENUM_SUPPORT                                 0 // Audio output is a fixed device on WebTV boxes.

#define EMAC_MAX_VOICES                                         64
#define EMAC_MAX_TRACKS                                         65

#define REVERB_USED                                             SMALL_MEMORY_REVERB
#define LOOPS_USED                                              LIMITED_LOOPS
#define USE_DROP_SAMPLE                                         0
#define USE_TERP1                                               0
#define USE_TERP2                                               1
#define USE_NEW_EFFECTS                                         0
// Interpolator:
#define EMAC_SAMPLE_LOOP_COUNTI                                 4 // 1, 2, 4, or 16
#define EMAC_AMPLITUDE_ADJUSTI                                  3
// Filter:
#define EMAC_SAMPLE_LOOP_COUNTF                                 4 // 1, 2, 4, or 16
#define EMAC_AMPLITUDE_ADJUSTF                                  3

#define EMAC_VOL_PRECISION_SCALAR                               6L
#define EMAC_OUTPUT_SCALAR                                      9L
#define EMAC_VOL_RANGE                                          4096
#define EMAC_UPSCALAR                                           16L
#define EMAC_MAX_RESONANCE                                      255
#define EMAC_STEP_BIT_RANGE                                     12L

#define FILE_NAME_LENGTH                                        1024

#define EMAC_DO_TEST_TONE                                       0
#define EMAC_TEST_TONE_HZ                                       1000
#define EMAC_DEBUG_NO_FILTER                                    0
#define EMAC_DEBUG_NO_INTERP                                    0
#define EMAC_DEBUG_NO_PARTIAL                                   0
#define EMAC_DEBUG_NO_FULL                                      0
#define EMAC_DEBUG_NO_STEREO                                    0
#define EMAC_DEBUG_NO_MONO                                      0
#define EMAC_DEBUG_NO_8BIT                                      0
#define EMAC_DEBUG_NO_16BIT                                     0

#ifdef __cplusplus
extern "C" {
#endif
extern int printf(const char *, ...);
extern void* memset(void* dest, int ch, unsigned int count);
#ifdef __cplusplus
}
#endif

#ifndef __MOTO__
    #define INLINE                                              inline
#else
    #define INLINE
#endif

#ifndef DEBUG_STR
    #if USE_DEBUG == 0
        #define DEBUG_STR(x)
    #endif
    #if USE_DEBUG == 1
        #define DEBUG_STR(x)                                    printf(x)
    #endif
#endif