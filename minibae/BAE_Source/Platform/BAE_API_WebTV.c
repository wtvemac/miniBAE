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
**  BAE_API_MacOS.c
**
**  This provides platform specfic functions for the Macintosh OS. This interface
**  for BAE is for the Sound Manager and sends buffer slices
**  through the multimedia system.
**
**  © Copyright 1995-2000 Beatnik, Inc, All Rights Reserved.
**  Written by Steve Hales
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
**  Confidential-- Internal use only
**
**  History -
**  7/22/97     Created
**  11/11/97    Added BAE_MaxDevices & BAE_SetDeviceID & BAE_GetDeviceID & BAE_GetDeviceName
**  11/14/97    Removed multiple defined variable "mAudioFramesToGenerate"
**  12/16/97    Modified BAE_GetDeviceID and BAE_SetDeviceID to pass a device parameter pointer
**              that is specific for that device.
**  1/9/98      Added BAE_FileDelete
**  2/13/98     Modified BAE_AquireAudioCard to handle different sample rates
**  3/17/98     Added BAE_Is8BitSupported
**  3/23/98     Fixed a bug in BAE_GetDeviceName that wrote the name into space. Thanks DavidZ
**
**  6/5/98      Jim Nitchals RIP    1/15/62 - 6/5/98
**              I'm going to miss your irreverent humor. Your coding style and desire
**              to make things as fast as possible. Your collaboration behind this entire
**              codebase. Your absolute belief in creating the best possible relationships
**              from honesty and integrity. Your ability to enjoy conversation. Your business
**              savvy in understanding the big picture. Your gentleness. Your willingness
**              to understand someone else's way of thinking. Your debates on the latest
**              political issues. Your generosity. Your great mimicking of cartoon voices.
**              Your friendship. - Steve Hales
**
**  12/17/98    Added BAE_GetHardwareBalance & BAE_SetHardwareBalance
**  3/5/99      Changed context to threadContext to reflect what is really is used
**              in the system.
**  3/31/99     Added constant for Netscape plugin memory.
**  5/7/99      Added some post flight memory tests to keep us from the hairy
**              edge of MacOS lala land.
**  8/23/99     MSD:  fixed terminating zero bug in BAE_GetDeviceName()
**  9/3/99      Changed the BAE_FRAMES_PER_BLOCK to 2, in case Apple changes to
**              smaller buffers in the Sound Manager.
**  2/1/2000    Added new MacOS X "approved" sound double buffering. Set
**              USE_MAC_OS_X to TRUE to use the new callback method.
**              Note: its slower.
**  2/2/2000    Added a buffer clear function to eliminate a startup click. Changed
**              name in BAE_GetDeviceName to support new method of playback.
**  7/5/2000    Changed BAE_Allocate/BAE_Deallocate to use MacOS temporary
**              memory. This has the effect of expanding the current application
**              heap.
**              Fixed a recursive bug in BAE_Allocate. oops.
**  7/25/2000   Changed BAE_SizeOfPointer to use the new way to get size of temp
**              handles.
**              Placed a USE_TEMP_MEMORY flag to control if we use the temp memory
**              API instead of allocating through our natural heap.
**              Added PV_IsVirtualMemoryAvailable & PV_LockMemory & PV_UnlockMemory
**  9/29/2000   Added condition compiler flags for support on MacOS X
**  10/2/2000   Set default condition to not use SndDoubleBuffer. This allows us to
**              to run under X without recompiling. We run in the "classic" mode.
**  10/5/2000   Fixed a function name change in BAE_AquireAudioCard
**  2/14/2001   sh  When compiled for Carbon (MacOS9/X) BAE_GetDeviceName now
**                  reports a better name that's not specific to OS9/X
*/
/*****************************************************************************/

#include "BAE_API.h"


#undef FALSE
#undef TRUE
#define TRUE                            1
#define FALSE                           0


// This file contains API's that need to be defined in order to get BAE (IgorAudio)
// to link and compile.

// **** System setup and cleanup functions
// Setup function. Called before memory allocation, or anything serious. Can be used to
// load a DLL, library, etc.
// return 0 for ok, or -1 for failure
int BAE_Setup(void)
{
   return(0);
}

// Cleanup function. Called after all memory and the last buffers are deallocated, and
// audio hardware is released. Can be used to unload a DLL, library, etc.
// return 0 for ok, or -1 for failure
int BAE_Cleanup(void)
{
   return(0);
}

// **** Memory management
// allocate a block of locked, zeroed memory. Return a pointer
void *BAE_Allocate(unsigned long size)
{
    return(0);
}

// dispose of memory allocated with BAE_Allocate
void BAE_Deallocate(void *memoryBlock)
{
}

// return memory used
unsigned long BAE_GetSizeOfMemoryUsed(void)
{
   return(0);
}

// return max memory used
unsigned long BAE_GetMaxSizeOfMemoryUsed(void)
{
   return(0);
}

// Given a memory pointer and a size, validate of memory pointer is a valid memory address
// with at least size bytes of data avaiable from the pointer.
// This is used to determine if a memory pointer and size can be accessed without
// causing a memory protection
// fault.
// return 0 for valid, or 1 for bad pointer, or 2 for not supported.
int BAE_IsBadReadPointer(void *memoryBlock, unsigned long size)
{
    return(0);
}

// this will return the size of the memory pointer allocated with BAE_Allocate. Return
// 0 if you don't support this feature
unsigned long BAE_SizeOfPointer(void *memoryBlock)
{
    return(0);
}

// block move memory. This is basicly memmove, but its exposed to take advantage of
// special block move speed ups, various hardware has available.
void BAE_BlockMove(void *source, void *dest, unsigned long size)
{
}

// **** Audio Card modifiers
// Return 1 if stereo hardware is supported, otherwise 0.
int BAE_IsStereoSupported(void)
{
    return(1);
}

// Return 1, if sound hardware support 16 bit output, otherwise 0.
int BAE_Is16BitSupported(void)
{
    return(1);
}

// Return 1, if sound hardware support 8 bit output, otherwise 0.
int BAE_Is8BitSupported(void)
{
    return(1);
}

// returned balance is in the range of -256 to 256. Left to right. If you're hardware doesn't support this
// range, just scale it.
short int BAE_GetHardwareBalance(void)
{
    return(0);
}

// 'balance' is in the range of -256 to 256. Left to right. If you're hardware doesn't support this
// range, just scale it.
void BAE_SetHardwareBalance(short int balance)
{
}

// returned volume is in the range of 0 to 256
short int BAE_GetHardwareVolume(void)
{
    return(0);
}

// theVolume is in the range of 0 to 256
void BAE_SetHardwareVolume(short int newVolume)
{
}

// **** Timing services
// return microseconds
unsigned long BAE_Microseconds(void)
{
    return(0);
}

// wait or sleep this thread for this many microseconds
void BAE_WaitMicroseconds(unsigned long usec)
{
}

int BAE_NewMutex(BAE_Mutex* lock, char *name, char *file, int lineno)
{
    return(0);
}

void BAE_AcquireMutex(BAE_Mutex lock)
{
}

void BAE_ReleaseMutex(BAE_Mutex lock)
{
}

void BAE_DestroyMutex(BAE_Mutex lock)
{
}


// If no thread support, this will be called during idle times. Used for host
// rendering without threads.
void BAE_Idle(void *userContext)
{
}

// **** File support
// Create a file, delete orignal if duplicate file name.
// Return -1 if error

// Given the fileNameSource that comes from the call BAE_FileXXXX, copy the name
// in the native format to the pointer passed fileNameDest.
void BAE_CopyFileNameNative(void *fileNameSource, void *fileNameDest)
{
}

long BAE_FileCreate(void *fileName)
{
    return(-1);
}

long BAE_FileDelete(void *fileName)
{
    return(-1);
}


// Open a file
// Return -1 if error, otherwise file handle
long BAE_FileOpenForRead(void *fileName)
{
    return(-1);
}

long BAE_FileOpenForWrite(void *fileName)
{
    return(-1);
}

long BAE_FileOpenForReadWrite(void *fileName)
{
    return(-1);
}

// Close a file
void BAE_FileClose(long fileReference)
{
}

// Read a block of memory from a file.
// Return -1 if error, otherwise length of data read.
long BAE_ReadFile(long fileReference, void *pBuffer, long bufferLength)
{
    return(-1);
}

// Write a block of memory from a file
// Return -1 if error, otherwise length of data written.
long BAE_WriteFile(long fileReference, void *pBuffer, long bufferLength)
{
    return(-1);
}

// set file position in absolute file byte position
// Return -1 if error, otherwise 0.
long BAE_SetFilePosition(long fileReference, unsigned long filePosition)
{
    return(-1);
}

// get file position in absolute file bytes
unsigned long BAE_GetFilePosition(long fileReference)
{
    return(0);
}

// get length of file
unsigned long BAE_GetFileLength(long fileReference)
{
    return(0);
}

// set the length of a file. Return 0, if ok, or -1 for error
int BAE_SetFileLength(long fileReference, unsigned long newSize)
{
    return -1;
}

// This function is called at render time with w route bus flag. If there's
// no change, return currentRoute, other wise return one of audiosys.h route values.
// This will change an active rendered's voice placement.
void BAE_ProcessRouteBus(int currentRoute, long *pChannels, int count)
{
}

static void PV_ClearOutputBuffer(void *pBuffer, short int channels, short int bits, unsigned long frames)
{
}


static void QueueStoppedProc(void* inUserData,
                       void* AQ,
                       unsigned long ID)
{
}

static void QueueCallbackProc(void* inUserData,
                                    void* AQ,
                                    void* CompleteAQBuffer) 
{
}

// Return the number of 11 ms buffer blocks that are built at one time.
int BAE_GetAudioBufferCount(void)
{
   return(0);
}

// Return the number of bytes used for audio buffer for output to card
long BAE_GetAudioByteBufferSize(void)
{
   return(0);
}

// Mute/unmute audio. Shutdown amps, etc.
// return 0 if ok, -1 if failed
int BAE_Mute(void)
{
   return(0);
}

int BAE_Unmute(void)
{
   return(0);
}

// **** Audio card support
// Aquire and enabled audio card
// return 0 if ok, -1 if failed
int BAE_AquireAudioCard(void *threadContext, unsigned long sampleRate, unsigned long channels, unsigned long bits)
{
    return(0);
}

// Release and free audio card.
// return 0 if ok, -1 if failed.
int BAE_ReleaseAudioCard(void *threadContext)
{
    return(0);
}

// return device position in samples
unsigned long BAE_GetDeviceSamplesPlayedPosition(void)
{
    return(0);
}


// number of devices. ie different versions of the BAE connection. DirectSound and waveOut
// return number of devices. ie 1 is one device, 2 is two devices.
// NOTE: This function needs to function before any other calls may have happened.
long BAE_MaxDevices(void)
{
   return(1);
}

// set the current device. device is from 0 to BAE_MaxDevices()
// NOTE:    This function needs to function before any other calls may have happened.
//          Also you will need to call BAE_ReleaseAudioCard then BAE_AquireAudioCard
//          in order for the change to take place.
void BAE_SetDeviceID(long deviceID, void *deviceParameter)
{
}

// return current device ID
// NOTE: This function needs to function before any other calls may have happened.
long BAE_GetDeviceID(void *deviceParameter)
{
   return(0);
}

// get deviceID name
// NOTE:    This function needs to function before any other calls may have happened.
//          Format of string is a zero terminated comma delinated C string.
//          "platform,method,misc"
//  example "MacOS,Sound Manager 3.0,SndPlayDoubleBuffer"
//          "WinOS,DirectSound,multi threaded"
//          "WinOS,waveOut,multi threaded"
//          "WinOS,VxD,low level hardware"
//          "WinOS,plugin,Director"
void BAE_GetDeviceName(long deviceID, char *cName, unsigned long cNameLength)
{
}


// EOF of BAE_API_MacOS.c
