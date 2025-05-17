import React, { useState } from 'react';
import { Settings, Volume2, Monitor, Bell, User, HelpCircle } from 'lucide-react';

type SettingsTab = 'game' | 'audio' | 'graphics' | 'notifications' | 'account' | 'help';

const SettingsView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SettingsTab>('game');
  const [gameSettings, setGameSettings] = useState({
    tutorialHints: true,
    uiScale: 100,
    clockFormat: '12h',
    confirmActions: true,
  });

  const [audioSettings, setAudioSettings] = useState({
    masterVolume: 80,
    musicVolume: 70,
    sfxVolume: 90,
    muteAll: false,
  });

  const [graphicsSettings, setGraphicsSettings] = useState({
    animationDetail: 'high',
    visualEffects: true,
  });

  const [notificationSettings, setNotificationSettings] = useState({
    desktop: true,
    marketSold: true,
    marketOutbid: true,
    breedingComplete: true,
    foragingComplete: true,
    companyAnnouncement: true,
    companyVote: true,
  });

  return (
    <div className="container mx-auto py-6 px-4">
      <div className="flex items-center gap-3 mb-6">
        <Settings className="h-8 w-8 text-blue-400" />
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Settings Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-gray-800 rounded-lg p-4">
            <button
              onClick={() => setActiveTab('game')}
              className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg transition-colors mb-2 ${
                activeTab === 'game' ? 'bg-blue-600' : 'hover:bg-gray-700'
              }`}
            >
              <Settings className="h-5 w-5" />
              Game
            </button>
            <button
              onClick={() => setActiveTab('audio')}
              className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg transition-colors mb-2 ${
                activeTab === 'audio' ? 'bg-blue-600' : 'hover:bg-gray-700'
              }`}
            >
              <Volume2 className="h-5 w-5" />
              Audio
            </button>
            <button
              onClick={() => setActiveTab('graphics')}
              className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg transition-colors mb-2 ${
                activeTab === 'graphics' ? 'bg-blue-600' : 'hover:bg-gray-700'
              }`}
            >
              <Monitor className="h-5 w-5" />
              Graphics
            </button>
            <button
              onClick={() => setActiveTab('notifications')}
              className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg transition-colors mb-2 ${
                activeTab === 'notifications' ? 'bg-blue-600' : 'hover:bg-gray-700'
              }`}
            >
              <Bell className="h-5 w-5" />
              Notifications
            </button>
            <button
              onClick={() => setActiveTab('account')}
              className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg transition-colors mb-2 ${
                activeTab === 'account' ? 'bg-blue-600' : 'hover:bg-gray-700'
              }`}
            >
              <User className="h-5 w-5" />
              Account
            </button>
            <button
              onClick={() => setActiveTab('help')}
              className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'help' ? 'bg-blue-600' : 'hover:bg-gray-700'
              }`}
            >
              <HelpCircle className="h-5 w-5" />
              Help & Support
            </button>
          </div>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3">
          <div className="bg-gray-800 rounded-lg p-6">
            {/* Game Settings */}
            {activeTab === 'game' && (
              <div>
                <h2 className="text-lg font-semibold mb-6">Game Settings</h2>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span>Enable Tutorial Hints</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={gameSettings.tutorialHints}
                        onChange={(e) =>
                          setGameSettings({
                            ...gameSettings,
                            tutorialHints: e.target.checked,
                          })
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-300 mb-2">
                      UI Scale: {gameSettings.uiScale}%
                    </label>
                    <input
                      type="range"
                      min="80"
                      max="120"
                      step="10"
                      value={gameSettings.uiScale}
                      onChange={(e) =>
                        setGameSettings({
                          ...gameSettings,
                          uiScale: parseInt(e.target.value),
                        })
                      }
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-300 mb-2">
                      Clock Format
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          checked={gameSettings.clockFormat === '12h'}
                          onChange={() =>
                            setGameSettings({
                              ...gameSettings,
                              clockFormat: '12h',
                            })
                          }
                          className="form-radio text-blue-600 bg-gray-700 border-gray-600"
                        />
                        12-hour
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          checked={gameSettings.clockFormat === '24h'}
                          onChange={() =>
                            setGameSettings({
                              ...gameSettings,
                              clockFormat: '24h',
                            })
                          }
                          className="form-radio text-blue-600 bg-gray-700 border-gray-600"
                        />
                        24-hour
                      </label>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span>Confirm High-Value Actions</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={gameSettings.confirmActions}
                        onChange={(e) =>
                          setGameSettings({
                            ...gameSettings,
                            confirmActions: e.target.checked,
                          })
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Audio Settings */}
            {activeTab === 'audio' && (
              <div>
                <h2 className="text-lg font-semibold mb-6">Audio Settings</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">
                      Master Volume: {audioSettings.masterVolume}%
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={audioSettings.masterVolume}
                      onChange={(e) =>
                        setAudioSettings({
                          ...audioSettings,
                          masterVolume: parseInt(e.target.value),
                        })
                      }
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-300 mb-2">
                      Music Volume: {audioSettings.musicVolume}%
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={audioSettings.musicVolume}
                      onChange={(e) =>
                        setAudioSettings({
                          ...audioSettings,
                          musicVolume: parseInt(e.target.value),
                        })
                      }
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-300 mb-2">
                      SFX Volume: {audioSettings.sfxVolume}%
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={audioSettings.sfxVolume}
                      onChange={(e) =>
                        setAudioSettings({
                          ...audioSettings,
                          sfxVolume: parseInt(e.target.value),
                        })
                      }
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <span>Mute All Audio</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={audioSettings.muteAll}
                        onChange={(e) =>
                          setAudioSettings({
                            ...audioSettings,
                            muteAll: e.target.checked,
                          })
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Graphics Settings */}
            {activeTab === 'graphics' && (
              <div>
                <h2 className="text-lg font-semibold mb-6">Graphics Settings</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">
                      Animation Detail
                    </label>
                    <select
                      value={graphicsSettings.animationDetail}
                      onChange={(e) =>
                        setGraphicsSettings({
                          ...graphicsSettings,
                          animationDetail: e.target.value,
                        })
                      }
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between">
                    <span>Visual Effects</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={graphicsSettings.visualEffects}
                        onChange={(e) =>
                          setGraphicsSettings({
                            ...graphicsSettings,
                            visualEffects: e.target.checked,
                          })
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Notifications Settings */}
            {activeTab === 'notifications' && (
              <div>
                <h2 className="text-lg font-semibold mb-6">
                  Notification Preferences
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Enable Desktop Notifications</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notificationSettings.desktop}
                        onChange={(e) =>
                          setNotificationSettings({
                            ...notificationSettings,
                            desktop: e.target.checked,
                          })
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="p-4 bg-gray-700 rounded-lg space-y-3">
                    <h3 className="font-medium mb-2">Notify me about:</h3>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={notificationSettings.marketSold}
                        onChange={(e) =>
                          setNotificationSettings({
                            ...notificationSettings,
                            marketSold: e.target.checked,
                          })
                        }
                        className="form-checkbox text-blue-600 bg-gray-600 border-gray-500 rounded"
                      />
                      Market: Item Sold
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={notificationSettings.marketOutbid}
                        onChange={(e) =>
                          setNotificationSettings({
                            ...notificationSettings,
                            marketOutbid: e.target.checked,
                          })
                        }
                        className="form-checkbox text-blue-600 bg-gray-600 border-gray-500 rounded"
                      />
                      Market: Outbid
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={notificationSettings.breedingComplete}
                        onChange={(e) =>
                          setNotificationSettings({
                            ...notificationSettings,
                            breedingComplete: e.target.checked,
                          })
                        }
                        className="form-checkbox text-blue-600 bg-gray-600 border-gray-500 rounded"
                      />
                      Breeding: Project Complete
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={notificationSettings.foragingComplete}
                        onChange={(e) =>
                          setNotificationSettings({
                            ...notificationSettings,
                            foragingComplete: e.target.checked,
                          })
                        }
                        className="form-checkbox text-blue-600 bg-gray-600 border-gray-500 rounded"
                      />
                      Foraging/Gathering: Task Complete
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={notificationSettings.companyAnnouncement}
                        onChange={(e) =>
                          setNotificationSettings({
                            ...notificationSettings,
                            companyAnnouncement: e.target.checked,
                          })
                        }
                        className="form-checkbox text-blue-600 bg-gray-600 border-gray-500 rounded"
                      />
                      Company: New Announcement
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={notificationSettings.companyVote}
                        onChange={(e) =>
                          setNotificationSettings({
                            ...notificationSettings,
                            companyVote: e.target.checked,
                          })
                        }
                        className="form-checkbox text-blue-600 bg-gray-600 border-gray-500 rounded"
                      />
                      Company: Vote Started
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Account Settings */}
            {activeTab === 'account' && (
              <div>
                <h2 className="text-lg font-semibold mb-6">
                  Account Information
                </h2>
                <div className="space-y-6">
                  <div className="p-4 bg-gray-700 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">Player ID</span>
                      <span className="font-mono">
                        #38f9d7e2-1234-5678-9abc-def012345678
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">Username</span>
                      <div className="flex items-center gap-2">
                        <span>Player123</span>
                        <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                          Change
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button className="w-full flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors">
                      Change Password
                    </button>
                    <button className="w-full flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors">
                      View Terms of Service
                    </button>
                    <button className="w-full flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors">
                      View Privacy Policy
                    </button>
                    <button className="w-full flex items-center justify-center gap-2 bg-red-900/50 hover:bg-red-900 text-red-400 hover:text-red-300 py-2 px-4 rounded-lg transition-colors">
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Help & Support */}
            {activeTab === 'help' && (
              <div>
                <h2 className="text-lg font-semibold mb-6">Help & Support</h2>
                <div className="space-y-4">
                  <button className="w-full flex items-center justify-between px-4 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                    <span>Frequently Asked Questions (FAQ)</span>
                    <HelpCircle className="h-5 w-5 text-blue-400" />
                  </button>
                  <button className="w-full flex items-center justify-between px-4 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                    <span>Report a Bug</span>
                    <AlertTriangle className="h-5 w-5 text-yellow-400" />
                  </button>
                  <button className="w-full flex items-center justify-between px-4 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                    <span>Contact Support</span>
                    <Mail className="h-5 w-5 text-blue-400" />
                  </button>

                  <div className="p-4 bg-gray-700 rounded-lg">
                    <div className="flex justify-between items-center text-sm text-gray-400">
                      <span>Game Version</span>
                      <span>v0.1.0</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsView;