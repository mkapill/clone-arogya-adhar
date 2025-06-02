   {/* Diagnostic Center Dropdown */}
              <div className="relative">
                <Button
                  variant="ghost"
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
                  onClick={() => setActiveDropdown(activeDropdown === "diagnostic" ? null : "diagnostic")}
                >
                  <span>Diagnostic Center</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </div>

              {/* Surgery Packages Dropdown */}
              <div className="relative">
                <Button
                  variant="ghost"
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
                  onClick={() => setActiveDropdown(activeDropdown === "surgery" ? null : "surgery")}
                >
                  <span>Surgery Packages</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
                {activeDropdown === "surgery" && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50 p-4">
                    <div className="space-y-2 text-sm">
                      <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Surgery Packages</div>
                      <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Treatment Packages</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Home Healthcare Dropdown */}
              <div className="relative">
                <Button
                  variant="ghost"
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
                  onClick={() => setActiveDropdown(activeDropdown === "home" ? null : "home")}
                >
                  <span>Home Healthcare</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
                {activeDropdown === "home" && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-lg border z-50 p-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="space-y-2">
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">ICU at Home</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">General Nursing</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">
                          Neurological Care & Rehabilitation
                        </div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">On Bed Cancer</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">
                          Transplant & Post-Op Care
                        </div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Pregnancy Care</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Mother & Child Care</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Palliative Care</div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Orthopaedic Care</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Stroke Care</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Cardiac Care</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Dialysis Care</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Old Age Health Care</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">COPD Care</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Bed Sores Care</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>