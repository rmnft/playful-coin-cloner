import React, { useState, useRef } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';
import { Loader2, Upload } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Lock, Coins, Pencil } from 'lucide-react';

export const TokenCreationForm = () => {
  const { connected } = useWallet();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    symbol: '',
    logo: null as File | null,
    decimals: '9',
    supply: '1000000000',
    description: '',
    website: '',
    twitter: '',
    telegram: '',
    discord: '',
    modifyCreator: false,
    revokeFreeze: true,
    revokeMint: true,
    revokeUpdate: true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!connected) {
      toast({
        title: 'Wallet Not Connected',
        description: 'Please connect your wallet to create a token.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);
    // Simulating token creation delay
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: 'Token Created Successfully!',
        description: 'Your token has been deployed to the Solana network.',
      });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSwitchChange = (name: string) => {
    setFormData(prev => ({ ...prev, [name]: !prev[name as keyof typeof prev] }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: 'File too large',
          description: 'Please upload an image under 5MB',
          variant: 'destructive',
        });
        return;
      }

      // Check file type
      if (!file.type.startsWith('image/')) {
        toast({
          title: 'Invalid file type',
          description: 'Please upload a PNG, JPG, or GIF image',
          variant: 'destructive',
        });
        return;
      }

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
      
      setFormData(prev => ({ ...prev, logo: file }));
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      // Check file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: 'File too large',
          description: 'Please upload an image under 5MB',
          variant: 'destructive',
        });
        return;
      }

      // Check file type
      if (!file.type.startsWith('image/')) {
        toast({
          title: 'Invalid file type',
          description: 'Please upload a PNG, JPG, or GIF image',
          variant: 'destructive',
        });
        return;
      }

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
      
      setFormData(prev => ({ ...prev, logo: file }));
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const isStep1Valid = () => {
    return formData.name.trim() !== '' && 
           formData.symbol.trim() !== '' && 
           formData.logo !== null;
  };

  const isStep2Valid = () => {
    return formData.decimals.trim() !== '' && 
           formData.supply.trim() !== '' && 
           formData.description.trim() !== '';
  };

  const nextStep = () => {
    if (currentStep === 1 && !isStep1Valid()) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in all required fields before proceeding.',
        variant: 'destructive',
      });
      return;
    }

    if (currentStep === 2 && !isStep2Valid()) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in all required fields before proceeding.',
        variant: 'destructive',
      });
      return;
    }

    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Steps */}
      <div className="flex justify-between mb-8 relative">
        {[1, 2, 3].map((step) => (
          <div
            key={step}
            className={`w-8 h-8 rounded-full flex items-center justify-center z-10 
              ${step === currentStep ? 'bg-red-500 text-white' : 
                step < currentStep ? 'bg-green-500 text-white' : 'bg-gray-700 text-gray-400'}`}
          >
            {step}
          </div>
        ))}
        {/* Progress Line */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gray-700 -translate-y-1/2">
          <div 
            className="h-full bg-green-500 transition-all duration-300"
            style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {currentStep === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div>
              <Label htmlFor="name" className="text-gray-200">Token Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="h-12 bg-gray-800/50 text-base"
                required
              />
            </div>

            <div>
              <Label htmlFor="symbol" className="text-gray-200">Token Symbol</Label>
              <Input
                id="symbol"
                name="symbol"
                value={formData.symbol}
                onChange={handleChange}
                className="h-12 bg-gray-800/50 text-base"
                required
              />
            </div>

            <div>
              <Label className="text-gray-200">Token Logo</Label>
              <div
                className={`border-2 border-dashed ${
                  previewUrl ? 'border-green-500' : 'border-gray-600'
                } rounded-lg p-6 text-center cursor-pointer relative transition-colors duration-200 hover:border-gray-400`}
                onClick={() => fileInputRef.current?.click()}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragEnter={(e) => {
                  e.preventDefault();
                  e.currentTarget.classList.add('border-blue-500');
                }}
                onDragLeave={(e) => {
                  e.preventDefault();
                  e.currentTarget.classList.remove('border-blue-500');
                }}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  id="logo"
                  className="hidden"
                  accept="image/png,image/jpeg,image/gif"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      if (file.size > 5 * 1024 * 1024) {
                        toast({
                          title: 'File too large',
                          description: 'Please upload an image under 5MB',
                          variant: 'destructive',
                        });
                        return;
                      }
                      if (!file.type.startsWith('image/')) {
                        toast({
                          title: 'Invalid file type',
                          description: 'Please upload a PNG, JPG, or GIF image',
                          variant: 'destructive',
                        });
                        return;
                      }
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setPreviewUrl(reader.result as string);
                      };
                      reader.readAsDataURL(file);
                      setFormData(prev => ({ ...prev, logo: file }));
                    }
                  }}
                />
                {previewUrl ? (
                  <div className="flex flex-col items-center">
                    <img 
                      src={previewUrl} 
                      alt="Token Logo Preview" 
                      className="w-32 h-32 rounded-lg mb-2 object-cover"
                    />
                    <p className="text-sm text-gray-400">Click or drag to change</p>
                  </div>
                ) : (
                  <div className="cursor-pointer block">
                    <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                    <p className="mb-2">Drop your 500 x 500 token logo here</p>
                    <p className="text-sm text-gray-400">PNG, JPG, GIF up to 5MB</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {currentStep === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="decimals" className="text-gray-200">Decimals</Label>
                <Input
                  id="decimals"
                  name="decimals"
                  type="number"
                  defaultValue="9"
                  value={formData.decimals}
                  onChange={handleChange}
                  className="h-12 bg-gray-800/50 text-base"
                  required
                />
                <p className="text-sm text-gray-500">Enter a value between 0 and 18 decimals</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="supply" className="text-gray-200">Total Supply</Label>
                <Input
                  id="supply"
                  name="supply"
                  type="number"
                  defaultValue="1000000000"
                  value={formData.supply}
                  onChange={handleChange}
                  className="h-12 bg-gray-800/50 text-base"
                  required
                />
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Common supply is 1 billion</p>
                  <p className="text-sm text-gray-500">With commas: 1,000,000,000</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-gray-200">Description</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Describe your token's purpose and vision..."
                value={formData.description}
                onChange={handleChange}
                className="min-h-[120px] bg-gray-800/50 text-base resize-none"
                required
              />
            </div>
          </motion.div>
        )}

        {currentStep === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="website" className="text-gray-200">Website (Optional)</Label>
                <Input
                  id="website"
                  name="website"
                  type="url"
                  placeholder="https://..."
                  value={formData.website}
                  onChange={handleChange}
                  className="h-12 bg-gray-800/50 text-base"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="twitter" className="text-gray-200">Twitter (Optional)</Label>
                <Input
                  id="twitter"
                  name="twitter"
                  type="url"
                  placeholder="https://twitter.com/..."
                  value={formData.twitter}
                  onChange={handleChange}
                  className="h-12 bg-gray-800/50 text-base"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="telegram" className="text-gray-200">Telegram (Optional)</Label>
                <Input
                  id="telegram"
                  name="telegram"
                  type="url"
                  placeholder="https://t.me/..."
                  value={formData.telegram}
                  onChange={handleChange}
                  className="h-12 bg-gray-800/50 text-base"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="discord" className="text-gray-200">Discord (Optional)</Label>
                <Input
                  id="discord"
                  name="discord"
                  type="url"
                  placeholder="https://discord.gg/..."
                  value={formData.discord}
                  onChange={handleChange}
                  className="h-12 bg-gray-800/50 text-base"
                />
              </div>
            </div>

            {/* Modify Creator Information */}
            <div className="mt-8 p-6 rounded-lg bg-gray-900/50">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-lg font-medium text-gray-200">Modify Creator Information</h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-400">(+0.1 SOL)</span>
                  <Switch
                    id="modifyCreator"
                    checked={formData.modifyCreator}
                    onCheckedChange={(checked) => {
                      setFormData((prev) => ({ ...prev, modifyCreator: checked }));
                    }}
                  />
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-6">Change the information of the creator in the metadata. By default, it is CoinFast.</p>

              {formData.modifyCreator && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="creatorName" className="text-gray-400 mb-2">Creator Name</Label>
                    <Input
                      id="creatorName"
                      value="CoinFast"
                      className="h-12 text-base bg-gray-800/50 border-0"
                      readOnly
                    />
                  </div>
                  <div>
                    <Label htmlFor="creatorWebsite" className="text-gray-400 mb-2">Creator Website</Label>
                    <Input
                      id="creatorWebsite"
                      value="https://coinfast.fun"
                      className="h-12 text-base bg-gray-800/50 border-0"
                      readOnly
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Revoke Authorities */}
            <div className="mt-8 space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-200">Revoke Authorities (Selected by Default)</h3>
                <p className="text-sm text-gray-500">Solana Token has 3 authorities: Freeze Authority, Mint Authority, and Update Authority. Revoke them to attract more investors.</p>
                <p className="text-sm text-gray-500 mt-1">*All 3 options are pre-selected by default, unselect them to turn them off.</p>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700 space-y-4">
                  <div className="flex justify-between items-start">
                    <Lock className="h-6 w-6 text-red-500" />
                    <span className="text-sm text-red-500">+0.1 SOL</span>
                  </div>
                  <h4 className="text-gray-200">Revoke Freeze</h4>
                  <p className="text-sm text-gray-500">Freeze Authority allows you to freeze token accounts of holders.</p>
                  <button
                    onClick={() => setFormData(prev => ({ ...prev, revokeFreeze: !prev.revokeFreeze }))}
                    className={`w-full py-2 rounded text-center transition-colors ${
                      formData.revokeFreeze 
                        ? 'bg-gray-700/30 text-red-500' 
                        : 'bg-gray-800/50 text-gray-500 hover:bg-gray-700/30 hover:text-red-500'
                    }`}
                  >
                    {formData.revokeFreeze ? 'Selected' : 'Select to Revoke'}
                  </button>
                </div>

                <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700 space-y-4">
                  <div className="flex justify-between items-start">
                    <Coins className="h-6 w-6 text-red-500" />
                    <span className="text-sm text-red-500">+0.1 SOL</span>
                  </div>
                  <h4 className="text-gray-200">Revoke Mint</h4>
                  <p className="text-sm text-gray-500">Mint Authority allows you to mint more supply of your token.</p>
                  <button
                    onClick={() => setFormData(prev => ({ ...prev, revokeMint: !prev.revokeMint }))}
                    className={`w-full py-2 rounded text-center transition-colors ${
                      formData.revokeMint 
                        ? 'bg-gray-700/30 text-red-500' 
                        : 'bg-gray-800/50 text-gray-500 hover:bg-gray-700/30 hover:text-red-500'
                    }`}
                  >
                    {formData.revokeMint ? 'Selected' : 'Select to Revoke'}
                  </button>
                </div>

                <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700 space-y-4">
                  <div className="flex justify-between items-start">
                    <Pencil className="h-6 w-6 text-red-500" />
                    <span className="text-sm text-red-500">+0.1 SOL</span>
                  </div>
                  <h4 className="text-gray-200">Revoke Update</h4>
                  <p className="text-sm text-gray-500">Update Authority allows you to update the token metadata about your token.</p>
                  <button
                    onClick={() => setFormData(prev => ({ ...prev, revokeUpdate: !prev.revokeUpdate }))}
                    className={`w-full py-2 rounded text-center transition-colors ${
                      formData.revokeUpdate 
                        ? 'bg-gray-700/30 text-red-500' 
                        : 'bg-gray-800/50 text-gray-500 hover:bg-gray-700/30 hover:text-red-500'
                    }`}
                  >
                    {formData.revokeUpdate ? 'Selected' : 'Select to Revoke'}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <div className="flex justify-between mt-8">
          {currentStep > 1 && (
            <Button
              type="button"
              onClick={prevStep}
              variant="outline"
              className="border-gray-600 text-gray-400 hover:bg-gray-800/50 hover:text-white"
            >
              Back
            </Button>
          )}
          
          {currentStep < totalSteps ? (
            <Button
              type="button"
              onClick={nextStep}
              className="bg-red-500 hover:bg-red-600 ml-auto px-8"
            >
              Next
            </Button>
          ) : (
            <Button
              type="submit"
              className="bg-red-500 hover:bg-red-600 ml-auto px-8"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating Token...
                </>
              ) : (
                'Create Token'
              )}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};
