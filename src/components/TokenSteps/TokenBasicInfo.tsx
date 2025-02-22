import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload } from 'lucide-react';

interface TokenBasicInfoProps {
  formData: {
    name: string;
    symbol: string;
    logoUrl: string;
    [key: string]: any;
  };
  setFormData: (data: any) => void;
}

export const TokenBasicInfo: React.FC<TokenBasicInfoProps> = ({ formData, setFormData }) => {
  const [previewUrl, setPreviewUrl] = React.useState('');

  const handleLogoChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview);
      // In a real implementation, we would upload the file to a server
      setFormData({ ...formData, logoUrl: preview });
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Token Name</Label>
        <Input
          id="name"
          placeholder="My Token"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="symbol">Token Symbol</Label>
        <Input
          id="symbol"
          placeholder="TKN"
          value={formData.symbol}
          onChange={(e) => setFormData({ ...formData, symbol: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="logo">Token Logo</Label>
        <div className="flex items-center gap-4">
          <div className="relative w-24 h-24 border-2 border-dashed rounded-lg flex items-center justify-center">
            {(previewUrl || formData.logoUrl) ? (
              <img
                src={previewUrl || formData.logoUrl}
                alt="Token Logo"
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <Upload className="w-8 h-8 text-gray-400" />
            )}
            <input
              type="file"
              id="logo"
              accept="image/*"
              onChange={handleLogoChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
          <div className="text-sm text-gray-500">
            Upload a logo for your token (optional)
          </div>
        </div>
      </div>
    </div>
  );
};
